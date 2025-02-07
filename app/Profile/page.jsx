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

const ProfilePage = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data and posts
  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get("http://localhost:5000/api/users/getProfile", {
          withCredentials: true,
        });

        if (userResponse.data) {
          setUser(userResponse.data); // Set user data
          const userId = userResponse.data._id;

          // Fetch posts using the user ID
          const postsResponse = await axios.post(
            "http://localhost:5000/api/posts/getPosts",
            { _id: userId },
            { withCredentials: true }
          );

          if (postsResponse.data) {
            setPosts(postsResponse.data.data);
            console.log("Posts response at profile page=====================>",postsResponse.data.data);
          } else {
            setError(postsResponse.data.message || "Failed to retrieve posts.");
          }
        }
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if something went wrong
  }

  if (!user) {
    return <div>No user data found.</div>; // Fallback if user data is not available
  }

  return (
    <div className={`min-h-screen p-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className={`max-w-4xl mx-auto rounded-lg shadow-md p-6 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        {/* Pass user data as props to child components */}
        <ProfileHeader user={user} />
        <StatsBar user={user} />
        <NavigationTabs />
        <div className="mt-6">
          <CreatePost />
          <Posts posts={posts} userProfile={user} /> {/* Pass posts data to the Posts component */}
        </div>
        <AboutSection user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;