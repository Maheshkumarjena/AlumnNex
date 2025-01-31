"use client";
import { useSelector } from "react-redux";

const StatsBar = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`flex justify-around mt-6 border-t border-b py-4 ${
      isDarkMode ? "border-gray-700" : "border-gray-300"
    }`}>
      <div className="text-center">
        <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>500</p>
        <p className={`text-gray-600 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Connections
        </p>
      </div>
      <div className="text-center">
        <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>1.2K</p>
        <p className={`text-gray-600 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Followers
        </p>
      </div>
      <div className="text-center">
        <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>800</p>
        <p className={`text-gray-600 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Following
        </p>
      </div>
      <div className="text-center">
        <p className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>45</p>
        <p className={`text-gray-600 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Posts
        </p>
      </div>
    </div>
  );
};

export default StatsBar;