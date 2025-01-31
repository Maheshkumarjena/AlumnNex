"use client";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`bg-gray-50 p-4 rounded-lg ${
      isDarkMode ? "bg-gray-800" : "bg-gray-100"
    }`}>
      <textarea
        placeholder="What's on your mind?"
        className={`w-full p-2 rounded-lg border ${
          isDarkMode ? "border-gray-700" : "border-gray-300"
        } placeholder-gray-500 ${
          isDarkMode ? "text-white" : "text-gray-900"
        } focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
        rows="3"
      ></textarea>
      <button
        className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${
          isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;