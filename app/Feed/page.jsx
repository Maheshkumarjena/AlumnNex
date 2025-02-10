"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "@components/profile/Post";
import { getCurrentUser } from "@utils/authUtils";
import Suggestions from "@components/Suggestion";
import Navigation from "@components/FeedNavigation";
import SearchBar from "@components/SearchBar";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  let user = null;

  if (typeof window !== "undefined") {
    user = getCurrentUser();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.post(
          "http://localhost:5000/api/posts/getPosts",
          { _id: user.id },
          { withCredentials: true }
        );
        if (postsResponse.data?.data) {
          setPosts(postsResponse.data.data);
        } else {
          setError("Failed to retrieve posts.");
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts/createPost",
        { content: newPostContent, userId: user._id },
        { withCredentials: true }
      );
      if (response.data) {
        setPosts([response.data, ...posts]);
        setNewPostContent("");
      }
    } catch (err) {
      setError("Failed to create post. Please try again later.");
    }
  };

  return (
    <div className="max-w-screen  mx-auto px-4 py-6 flex justify-center">
      <div className="flex gap-6 w-full justify-center">
      <div className="hidden md:block w-64 flex-shrink-0 sticky top-6 h-fit">
          <Navigation />
        </div>
        {/* Feed Section - Centered */}
        <div className="flex-1 max-w-2xl mx-auto">
        <div className="sticky top-0 z-30 bg-gray-50 pt-4 pb-2 px-4">
        <div className="max-w-7xl mx-auto">
          <SearchBar />
        </div>
      </div>

          <div className="mb-6 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              rows="3"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <button
              onClick={handleCreatePost}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Post
            </button>
          </div>

          <div className="space-y-6">
            {isLoading ? (
              <div className="text-center py-8">Loading...</div>
            ) : error ? (
              <div className="text-center py-8 text-red-600">{error}</div>
            ) : (
              posts.map((post) => <Post key={post._id} post={post} />)
            )}
          </div>
        </div>

        {/* Suggestions - Positioned in the available space */}
        <div className="w-80 hidden lg:flex flex-col flex-shrink-0">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Feed;
