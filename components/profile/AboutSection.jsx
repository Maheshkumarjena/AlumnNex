"use client";
import { useSelector } from "react-redux";

const AboutSection = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className="mt-6">
      <h2 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        About
      </h2>
      <div className={`mt-4 space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
        <p><strong>Education:</strong> XYZ University, B.Sc. Computer Science (Class of 2022)</p>
        <p><strong>Work Experience:</strong> Software Intern at ABC Corp (Summer 2021)</p>
        <p><strong>Skills:</strong> Python, Java, Data Analysis, Team Leadership</p>
        <p><strong>Interests:</strong> Machine Learning, Open Source Projects, Traveling</p>
      </div>
    </div>
  );
};

export default AboutSection;