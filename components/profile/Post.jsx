"use client";
import { useSelector } from "react-redux";

const Post = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`mt-6 p-4 rounded-lg shadow-md ${
      isDarkMode ? "bg-gray-800" : "bg-white"
    }`}>
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            John Doe
          </p>
          <p className={`text-gray-600 text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            2 hours ago
          </p>
        </div>
      </div>
      <p className={`mt-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Just finished my final project for the semester! 🎉 #StudentLife
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Post"
        className="mt-4 rounded-lg"
      />
      <div className="mt-4 flex space-x-4">
        <button className={`text-gray-600 hover:text-blue-500 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          Like
        </button>
        <button className={`text-gray-600 hover:text-blue-500 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          Comment
        </button>
        <button className={`text-gray-600 hover:text-blue-500 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;