"use client";
import React, { useEffect, useState } from "react";
import ProfileHeader from "@components/profile/ProfileHeader";
import NavigationTabs from "@components/profile/NavigationTabs";
import CreatePost from "@components/profile/CreatePost";
import Post from "@components/profile/Post";
import AboutSection from "@components/profile/AboutSection";
import StatsBar from "@components/profile/StatsBar";
import Posts from "@components/profile/MultiplePosts";
import { useSelector } from "react-redux";
import { getCurrentUser } from "@utils/authUtils";

import axios from "axios";

const posts = [
  {
    id: 1,
    user: {
      username: 'john_doe',
      profilePicture: '/profile.jpg',
    },
    content: 'Just finished my final project for the semester! 🎉 #StudentLife',
    media: 'https://via.placeholder.com/600x300',
    likes: 10,
    comments: [
      {
        user: {
          username: 'jane_doe',
          profilePicture: '/profile2.jpg',
        },
        content: 'Great job!',
      },
    ],
    timestamp: '2 hours ago',
    isAuthor: true,
    isLiked: false,
  },
  // Add more posts here
];

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
          <Posts post={posts}/>
        </div>
        <AboutSection user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;