"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        if (response.data.status) {
          setPosts(response.data.posts);
        }
      } catch (err) {
        setError("Failed to fetch posts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Handle post deletion
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Handle post edit
  const handleEditPost = (postId, newContent) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, content: newContent } : post
      )
    );
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-900">
      {/* Create Post Input (Optional) */}
      <div className="mb-6 p-4 rounded-lg bg-white shadow-md">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-2 rounded-lg border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          rows="3"
        />
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Post
        </button>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onDelete={handleDeletePost}
            onEdit={handleEditPost}
            userProfile={post.user} // Assuming the post object contains user details
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;