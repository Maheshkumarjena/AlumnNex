"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Alert,AlertDescription } from "./alert";
const PostActions = ({ 
  isDarkMode, 
  isLiked, 
  likes, 
  comments, 
  onLike, 
  onComment, 
  setCommentView, 
  postId 
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("default");

  const handleShare = async () => {
    try {
      const postUrl = `${window.location.origin}/posts/${postId}`;

      if (navigator.share) {
        await navigator.share({
          title: 'Check out this post',
          text: 'I found this interesting post',
          url: postUrl,
        });
      } else {
        await navigator.clipboard.writeText(postUrl);
        setAlertMessage("Link copied to clipboard!");
        setAlertVariant("default");
        setShowAlert(true);
        
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      if (error.name === 'AbortError') return;
      
      console.error('Share failed:', error);
      setAlertMessage("Failed to share. Please try again.");
      setAlertVariant("destructive");
      setShowAlert(true);
      
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div className="relative">
      <div className="mt-4 flex space-x-4">
        <button
          onClick={onLike}
          className={`flex items-center space-x-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500 transition-colors duration-200`}
        >
          <FontAwesomeIcon 
            icon={faHeart} 
            className={`${isLiked ? "text-red-500" : ""} transition-colors duration-200`} 
          />
          <span>{likes.length}</span>
        </button>
        
        <button
          onClick={onComment}
          className={`flex items-center space-x-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500 transition-colors duration-200`}
        >
          <FontAwesomeIcon 
            onClick={setCommentView} 
            icon={faComment} 
            className="transition-colors duration-200"
          />
          <span>{comments.length}</span>
        </button>
        
        <button
          onClick={handleShare}
          className={`flex items-center space-x-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } hover:text-blue-500 transition-colors duration-200`}
        >
          <FontAwesomeIcon 
            icon={faShare} 
            className="transition-colors duration-200"
          />
          <span>Share</span>
        </button>
      </div>

      {/* Alert Notification */}
      {showAlert && (
        <div className="absolute bottom-full left-0 mb-2 w-full">
          <Alert 
            variant={alertVariant}
            className={`${
              isDarkMode 
                ? "bg-gray-700 text-white border-gray-600" 
                : "bg-white border-gray-200"
            } shadow-lg`}
          >
            <AlertDescription>
              {alertMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default PostActions;