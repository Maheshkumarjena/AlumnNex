"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "@components/profile/Post";
import { getCurrentUser } from "@utils/authUtils";

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

        if (postsResponse.data && postsResponse.data.data) {
          setPosts(postsResponse.data.data);
        } else {
          setError("Failed to retrieve posts.");
        }
      }
      catch (err) {
        console.error("Failed to fetch data:", err.message);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }

    }
    fetchData();
  }, []);



  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/deletePost/${postId}`, {
        withCredentials: true,
      });
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (err) {
      console.error("Failed to delete post:", err.message);
      setError("Failed to delete post. Please try again later.");
    }
  };

  const handleEditPost = (postId, newContent) => {
    setPosts(
      posts.map((post) =>
        post._id === postId ? { ...post, content: newContent } : post
      )
    );
  };

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
      console.error("Failed to create post:", err.message);
      setError("Failed to create post. Please try again later.");
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Create Post Input */}
      <div className="mb-6 p-4 rounded-lg bg-white shadow-md">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-2 rounded-lg border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Post
            key={post._id}
            post={post}
            onDelete={handleDeletePost}
            onEdit={handleEditPost}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;