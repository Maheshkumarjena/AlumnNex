import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import axios from "axios";
import PostActions from "@components/PostActions";
import PostMenu from "@components/PostMenu";
import { getCurrentUser } from "@utils/authUtils";

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
  const [replyingTo, setReplyingTo] = useState(null); // Track which comment is being replied to

  let user = null;
  if (typeof window !== "undefined") {
    user = getCurrentUser();
  }


  useEffect(() => {
    if (post.likes.includes(user.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [post.likes, user.id]);


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
    console.log("Post saved");
  };

  const handleArchive = () => {
    console.log("Post archived");
  };



  const handleLike = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/posts/likePost",
        {
          postId: post._id,
          userId: user.id,
        },
        { withCredentials: true }
      );

      if (response.data && response.data.success) {
        setIsLiked((prevLiked) => !prevLiked);
        setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
      } else {
        setError(response.data.message || "Failed to update like.");
      }
    } catch (err) {
      console.error("Like request failed:", err.response?.data.message || err.message);
      setError(err.response?.data?.message || "Failed to update like. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleComment = async () => {
    if (!newComment.trim()) return;
  
    try {
      setIsLoading(true);
  
      const payload = {
        userId: user.id,
        content: newComment,
        ...(replyingTo && { parentCommentId: replyingTo }) // Conditionally include parentCommentId
      };
  
      const response = await axios.post(
        `http://localhost:5000/api/posts/commentPost/${post._id}`,
        payload,
        { withCredentials: true }
      );
  
      if (response.data.success) {
        console.log("response inside the handleComment", response.data);
  
        setComments(prevComments => [...prevComments, response.data.comments]); // Ensure proper merging
        setNewComment("");
        setReplyingTo(null);
      }
    } catch (err) {
      setError("Failed to add comment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    console.log("Updated comments:", comments);
  }, [comments]);
  

  const handleReply = (commentId, username) => {
    console.log("comments when handleReply called",comments

    )
    console.log("replying to",replyingTo)
    setReplyingTo(commentId);
    setNewComment(`@${username} `); // Auto-fill the input field with the username
  };

  const renderComment = (comment, level = 0) => {
    const hasReplies = comment.replies && comment.replies.length > 0;

    return (
      <div key={comment._id} className="relative">
        {/* Vertical line to indicate nesting */}
        {level > 0 && (
          <div
            className="absolute top-0 left-4 w-px h-full bg-gray-300"
            style={{ transform: "translateX(-50%)" }}
          />
        )}

        {/* Comment Container */}
        <div className="flex items-start space-x-2 mt-2" style={{ paddingLeft: `${level * 24}px` }}>
          {/* Profile Picture */}
          <Image
            src={comment.userId?.profilePicture || "/default-profile.png"}
            alt="Profile Picture"
            width={30}
            height={30}
            className="w-8 h-8 rounded-full"
          />

          {/* Comment Content */}
          <div className="flex-1">
            {/* Username */}
            <p className={`text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {comment.userId?.username}
            </p>

            {/* Comment Text */}
            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {comment?.content}
            </p>

            {/* Reply Button */}
            <button
              className={`text-sm mt-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
              onClick={() => handleReply(comment._id, comment.userId?.username)}
            >
              Reply
            </button>
          </div>
        </div>

        {/* Render Replies */}
        {hasReplies && (
          <div className="pl-8">
            {comment.replies.map((reply) => renderComment(reply, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`mt-6 p-4 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      {/* Post Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src={post.user.profilePicture || "/default-profile.png"}
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {post.user.username || "User"}
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
        <div className="mt-4 grid grid-cols-2 md:grid-cols-2 gap-2 max-h-80 md:max-h-100 overflow-hidden relative">
          {post.media.slice(0, 3).map((media, index) => (
            <div key={index} className="relative w-full h-32 md:h-50">
              <Image
                src={media || "/default-profile.png"}
                alt="Post Media"
                layout="fill"
                objectFit="cover"
                className="rounded-lg md:w-[50vw]"
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
        {comments.map((comment) => renderComment(comment)
      , console.log(comments,"comments"))}
        <div className="mt-4">
          <textarea
            placeholder={replyingTo ? `Replying to @${comments.find(c => c._id === replyingTo)?.userId?.username}` : "Add a comment..."}
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
            {replyingTo ? "Reply" : "Comment"}
          </button>
          {replyingTo && (
            <button
              onClick={() => setReplyingTo(null)}
              className={`mt-2 ml-2 px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 hover:bg-gray-800" : "bg-gray-600 hover:bg-gray-700"
                } text-white`}
            >
              Cancel Reply
            </button>
          )}
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