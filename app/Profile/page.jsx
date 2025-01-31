"use client";
import React, { useEffect, useState } from "react";
import ProfileHeader from "@components/profile/ProfileHeader";
import NavigationTabs from "@components/profile/NavigationTabs";
import CreatePost from "@components/profile/CreatePost";
import Post from "@components/profile/Post";
import AboutSection from "@components/profile/AboutSection";
import StatsBar from "@components/profile/StatsBar";
import { useSelector } from "react-redux";
import { getCurrentUser } from "@utils/authUtils";
import axios from "axios";

const ProfilePage = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";
  const [user, setUser] = useState(null);

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/getProfile", {
          withCredentials: true,
        });
        console.log("response in the profile page trying to fetch :::::",response)
        if (response.data) {
          setUser(response.data); // Set user data
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err.message);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Show loading state while fetching user data
  }

  return (
    <div className={`min-h-screen p-4 ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      <div className={`max-w-4xl mx-auto rounded-lg shadow-md p-6 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}>
        {/* Pass user data as props to child components */}
        <ProfileHeader user={user} />
        <StatsBar user={user} />
        <NavigationTabs />
        <div className="mt-6">
          <CreatePost />
          <Post user={user} /> {/* Pass user data to Post component */}
        </div>
        <AboutSection user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;