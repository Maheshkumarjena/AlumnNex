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
import ConnectionsSection from "@components/ConnectionCard";
import { getBackendURL } from "@utils/generalUtils";

export const mockConnections = [
  {
    _id: '1',
    username: 'Sarah Wilson',
    profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    _id: '2',
    username: 'John Doe',
    profilePicture: null  // This will trigger the fallback icon
  },
  {
    _id: '3',
    username: 'Emma Thompson',
    profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    _id: '4',
    username: 'Michael Chen',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    _id: '5',
    username: 'David Rodriguez',
    profilePicture: null
  },
  {
    _id: '6',
    username: 'Lisa Kim',
    profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    _id: '7',
    username: 'Alex Johnson',
    profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    _id: '8',
    username: 'Maria Garcia',
    profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
];


const ProfilePage = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Posts");
  const [connections, setConnections] = useState([]);

  // Fetch user data, posts, and connections
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get(
          `${getBackendURL()}/api/users/getProfile`,
          {
            withCredentials: true,
          }
        );

        if (userResponse.data) {
          setUser(userResponse.data);
          const userId = userResponse.data._id;

          // Fetch posts
          const postsResponse = await axios.post(
            `${getBackendURL()}/api/posts/getPosts`,
            { _id: userId },
            { withCredentials: true }
          );

          if (postsResponse.data) {
            setPosts(postsResponse.data.data);
          } else {
            setError(postsResponse.data.message || "Failed to retrieve posts.");
          }

          // Fetch connections (assuming you have an endpoint for this)
          // const connectionsResponse = await axios.get(
          //   `http://localhost:5000/api/users/connections/${userId}`,
          //   { withCredentials: true }
          // );

          // if (connectionsResponse.data) {
          //   setConnections(connectionsResponse.data);
          // }

          setConnections(mockConnections)
        }
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
          <p className="text-red-600 dark:text-red-200">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">No user data found.</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Posts":
        return (
          <div className="space-y-6">
            <CreatePost />
            <Posts posts={posts} />
          </div>
        );
      case "About":
        return <AboutSection user={user} />;
      case "Connections":
        return <ConnectionsSection connections={connections} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen p-2 sm:p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto p-2 rounded-lg shadow-md overflow-hidden ${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="sticky p-2 sm:p-4 top-0 z-10 bg-inherit">
          <ProfileHeader user={user} />
          <StatsBar user={user} />
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="max-w-full overflow-x-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;