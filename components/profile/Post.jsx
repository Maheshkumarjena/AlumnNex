"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Post = ({ post, onDelete, onEdit }) => {
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


  const [user, setUser] = useState(null);

  // Fetch user details when the component mounts
  useEffect( async () => {
    const fetchUser = async () => {
      console.log("fetch request of user ", post.userId)
      try {
        const response = await axios.post(`http://localhost:5000/api/users/getUserdata`,{
          userId:post.userId
        });
        if (response.data.status) {
            setUser(response.data);
        }
      } catch (err) {
        setError("Failed to fetch user details.");
      }
    };


    await fetchUser();
  }, [post.userId]);

  console.log('user fetched ',user)

  // Handle like/unlike
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

  // Handle comment submission
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

  // Handle post edit
  const handleEdit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(`/api/posts/${post.id}`, {
        content: editedContent,
      });
      if (response.data.status) {
        setIsEditing(false);
        onEdit(post.id, editedContent); // Update post content in parent component
      }
    } catch (err) {
      setError("Failed to edit post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle post deletion
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/posts/${post.id}`);
      if (response.data.status) {
        onDelete(post.id); // Remove post from parent component
      }
    } catch (err) {
      setError("Failed to delete post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`mt-6 p-4 rounded-lg shadow-md ${
      isDarkMode ? "bg-gray-800" : "bg-white"
    }`}>
      {/* Post Author */}
      <div className="flex items-center space-x-4">
        <Image
          src={user?.profilePicture || "/default-profile.png"}
          alt="Profile Picture"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {user?.username || "User"}
          </p>
          <p className={`text-gray-600 text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {post.timestamp} {/* Dynamic timestamp */}
          </p>
        </div>
      </div>

      {/* Post Content */}
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className={`w-full p-2 mt-4 rounded-lg border ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          } placeholder-gray-500 ${
            isDarkMode ? "text-white" : "text-gray-900"
          } focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
          rows="3"
        />
      ) : (
        <p className={`mt-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {post.content}
        </p>
      )}

      {/* Post Media */}
      {post.media && (
        <Image
          src={post.media}
          alt="Post Media"
          width={600}
          height={300}
          className="mt-4 rounded-lg"
        />
      )}

      {/* Post Actions */}
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <FontAwesomeIcon icon={faHeart} className={isLiked ? "text-red-500" : ""} />
          <span>{likes}</span>
        </button>
        <button
          className={`flex items-center space-x-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <FontAwesomeIcon icon={faComment} />
          <span>{comments.length}</span>
        </button>
        <button
          className={`flex items-center space-x-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <FontAwesomeIcon icon={faShare} />
          <span>Share</span>
        </button>
        {post.isAuthor && (
          <>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center space-x-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-blue-500`}
            >
              <FontAwesomeIcon icon={faEdit} />
              <span>{isEditing ? "Cancel" : "Edit"}</span>
            </button>
            <button
              onClick={handleDelete}
              className={`flex items-center space-x-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-red-500`}
            >
              <FontAwesomeIcon icon={faTrash} />
              <span>Delete</span>
            </button>
          </>
        )}
      </div>

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
            className={`w-full p-2 rounded-lg border ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            } placeholder-gray-500 ${
              isDarkMode ? "text-white" : "text-gray-900"
            } focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
            rows="1"
          />
          <button
            onClick={handleComment}
            className={`mt-2 px-4 py-2 rounded-lg ${
              isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
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