"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";

const PostActions = ({ isDarkMode, isLiked, likes, comments, onLike, onComment, onShare }) => {
  // console.log(isLiked,"at postActions")
  return (
    <div className="mt-4 flex space-x-4">
      <button
        onClick={onLike}
        className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500`}
      >
        <FontAwesomeIcon icon={faHeart} className={isLiked ? "text-red-500" : ""} />
        <span>{likes.length}</span>
      </button>
      <button
        onClick={onComment}
        className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500`}
      >
        <FontAwesomeIcon icon={faComment} />
        <span>{comments.length}</span>
      </button>
      <button
        onClick={onShare}
        className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500`}
      >
        <FontAwesomeIcon icon={faShare} />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostActions;