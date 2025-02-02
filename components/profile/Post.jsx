"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import axios from "axios";
import PostActions from "@components/PostActions";
import PostMenu from "@components/PostMenu";

const Post = ({ post, onDelete, onEdit, userProfile }) => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLike = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/posts/${post.id}/like`, {
        like: !isLiked,
      });
      if (response.data.status) {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
      }
    } catch (err) {
      setError("Failed to update like. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleComment = async () => {
    if (!newComment.trim()) return;
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/posts/${post.id}/comment`, {
        content: newComment,
      });
      if (response.data.status) {
        setComments([...comments, response.data.comment]);
        setNewComment("");
      }
    } catch (err) {
      setError("Failed to add comment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(`/api/posts/${post.id}`, {
        content: editedContent,
      });
      if (response.data.status) {
        setIsEditing(false);
        onEdit(post.id, editedContent);
      }
    } catch (err) {
      setError("Failed to edit post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/posts/${post.id}`);
      if (response.data.status) {
        onDelete(post.id);
      }
    } catch (err) {
      setError("Failed to delete post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    // Implement save functionality
    console.log("Post saved");
  };

  const handleArchive = () => {
    // Implement archive functionality
    console.log("Post archived");
  };

  return (
    <div className={`mt-6 p-4 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      {/* Post Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src={userProfile?.profilePicture || "/default-profile.png"}
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {userProfile?.username || "User"}
            </p>
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {post.timestamp}
            </p>
          </div>
        </div>
        <PostMenu
          isDarkMode={isDarkMode}
          onEdit={() => setIsEditing(!isEditing)}
          onDelete={handleDelete}
          onSave={handleSave}
          onArchive={handleArchive}
        />
      </div>

      {/* Post Content */}
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className={`w-full p-2 mt-4 rounded-lg border ${isDarkMode ? "border-gray-700" : "border-gray-300"
            } placeholder-gray-500 ${isDarkMode ? "text-white" : "text-gray-900"
            } focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
          rows="3"
        />
      ) : (
        <p className={`mt-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {post.content}
        </p>
      )}

{post.media && post.media.length > 0 && (
  <div className="mt-4 grid grid-cols-2 md:grid-cols-2 gap-2 max-h-80  md:max-h-100 overflow-hidden relative">
    {post.media.slice(0, 3).map((media, index) => (
      <div key={index} className="relative w-full h-32 md:h-50 ">
        <Image
          src={media || "/default-profile.png"}
          alt="Post Media"
          layout="fill"
          objectFit="cover"
          className="rounded-lg md:w-[50vw] "
        />
      </div>
    ))}
    {post.media.length > 3 && (
      <div className="relative w-full h-32 md:h-40 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer">
        <p className="text-white font-bold">+{post.media.length - 3} More</p>
      </div>
    )}
  </div>
)}


      {/* Post Actions */}
      <PostActions
        isDarkMode={isDarkMode}
        isLiked={isLiked}
        likes={likes}
        comments={comments}
        onLike={handleLike}
        onComment={handleComment}
        onShare={() => console.log("Share post")}
      />

      {/* Comments Section */}
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2">
            <Image
              src={comment.user.profilePicture || "/default-profile.png"}
              alt="Profile Picture"
              width={30}
              height={30}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className={`text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {comment.user.username}
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {comment.content}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className={`w-full p-2 rounded-lg border ${isDarkMode ? "border-gray-700" : "border-gray-300"
              } placeholder-gray-500 ${isDarkMode ? "text-white" : "text-gray-900"
              } focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
            rows="1"
          />
          <button
            onClick={handleComment}
            className={`mt-2 px-4 py-2 rounded-lg ${isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
          >
            Comment
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className={`mt-4 text-sm ${isDarkMode ? "text-red-400" : "text-red-600"}`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Post;