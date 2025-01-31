"use client";
import ProfileHeader from "@components/profile/ProfileHeader";
import StatsBar from "@components/profile/StatsBar";
import NavigationTabs from "@components/profile/NavigationTabs";
import CreatePost from "@components/profile/CreatePost";
import Post from "@components/profile/Post";
import AboutSection from "@components/profile/AboutSection";
import { useSelector } from "react-redux";
import Link from "@node_modules/next/link";

const ProfilePage = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";
  return (
    <div className={`min-h-screen p-4 ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      <div className={`max-w-4xl mx-auto rounded-lg shadow-md p-6 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}>
        {/* Edit Profile Button */}
        <div className="flex justify-end mb-4">
          <Link
            href="/Profile/Edit"
            className={`px-4 py-2 rounded-lg ${
              isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
          >
            Edit Profile
          </Link>
        </div>

        <ProfileHeader />
        <StatsBar />
        <NavigationTabs />
        <div className="mt-6">
          <CreatePost />
          <Post />
        </div>
        <AboutSection />
      </div>
    </div>
  );
};

export default ProfilePage;