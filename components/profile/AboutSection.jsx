"use client";
import { useSelector } from "react-redux";

const AboutSection = ({ user }) => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className="mt-6">
      <h2 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        About
      </h2>
      <div className={`mt-4 space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
        <p><strong>Education:</strong> {user.education || "Not specified"}</p>
        <p><strong>Work Experience:</strong> {user.workExperience || "Not specified"}</p>
        <p><strong>Skills:</strong> {user.skills || "Not specified"}</p>
        <p><strong>Interests:</strong> {user.interests || "Not specified"}</p>
      </div>
    </div>
  );
};

export default AboutSection;