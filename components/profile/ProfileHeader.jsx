"use client";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
      {/* Profile Picture */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
      />
      {/* Profile Info */}
      <div className="text-center md:text-left">
        <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          John Doe
        </h1>
        <p className={`text-gray-600 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          @john_doe
        </p>
        <p className={`text-gray-600 mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Computer Science Student at XYZ University | Aspiring Software Engineer
        </p>
        <p className={`text-gray-600 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          🌍 New York, NY
        </p>
        <a
          href="https://john-doe-portfolio.com"
          className="text-blue-500 hover:underline"
        >
          🔗 john-doe-portfolio.com
        </a>
        <div className="mt-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${
              isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Connect
          </button>
          <button
            className={`ml-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 ${
              isDarkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;