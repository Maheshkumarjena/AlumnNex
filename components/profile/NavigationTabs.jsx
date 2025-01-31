"use client";
import { useSelector } from "react-redux";

const NavigationTabs = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`flex justify-between mt-6 border-b ${
      isDarkMode ? "border-gray-700" : "border-gray-300"
    }`}>
      <button className={`py-2 px-4 hover:bg-gray-100 rounded-t-lg ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
      }`}>
        Posts
      </button>
      <button className={`py-2 px-4 hover:bg-gray-100 rounded-t-lg ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
      }`}>
        About
      </button>
      <button className={`py-2 px-4 hover:bg-gray-100 rounded-t-lg ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
      }`}>
        Connections
      </button>
      <button className={`py-2 px-4 hover:bg-gray-100 rounded-t-lg ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
      }`}>
        Groups
      </button>
      <button className={`py-2 px-4 hover:bg-gray-100 rounded-t-lg ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
      }`}>
        Events
      </button>
      <button className={`py-2 px-4 hover:bg-gray-100 rounded-t-lg ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
      }`}>
        Media
      </button>
    </div>
  );
};

export default NavigationTabs;