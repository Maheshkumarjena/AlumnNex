"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import axios from "axios";
import { getCurrentUser } from "@utils/authUtils";

const CreatePost = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  // State for post content
  const [postContent, setPostContent] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]); // Store uploaded media files
  const [mediaPreviews, setMediaPreviews] = useState([]); // Store media preview URLs
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message

  let user = null;
  if (typeof window !== "undefined") {
    user = getCurrentUser();
  }

  console.log("user from the frontend:", user);

  // Handle media file upload
  const handleMediaUpload = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const validFiles = Array.from(files).filter((file) => {
        const isValidType = file.type.startsWith("image/") || file.type.startsWith("video/");
        if (!isValidType) {
          console.warn(`Unsupported file type: ${file.name}`);
          return false;
        }
        return true;
      });
  
      if (validFiles.length > 0) {
        setMediaFiles((prev) => [...prev, ...validFiles]);
  
        // Create preview URLs for the uploaded files
        const newMediaPreviews = validFiles.map((file) => ({
          url: URL.createObjectURL(file),
          type: file.type.startsWith("image") ? "image" : "video",
        }));
        setMediaPreviews((prev) => [...prev, ...newMediaPreviews]);
      } else {
        setError("Please upload only images or videos.");
      }
    }
  };

  // Remove a media file
  const handleRemoveMedia = (index) => {
    URL.revokeObjectURL(mediaPreviews[index].url); // Free up memory
    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
    setMediaPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle post submission
  const handleSubmit = async () => {
    if (!postContent.trim() && mediaFiles.length === 0) {
      setError("Please add some content or media to your post.");
      return;
    }
  
    setIsLoading(true);
    setError("");
  
    try {
      const formData = new FormData();
  
      // Append post content
      formData.append("content", postContent);
      formData.append("_id", user._id);
  
      // Append media files
      mediaFiles.forEach((file) => {
        formData.append("files", file); // Ensure this matches the backend field name
      });
  
      // Log FormData for debugging
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
  
      // Example API call to submit the post
      const response = await axios.post("http://localhost:5000/api/posts/upload", formData, {
        withCredentials: true, // Include cookies if needed
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response) {
        console.log("Post created successfully:", response.data);
        // Clear the form after successful submission
        setPostContent("");
        setMediaFiles([]);
        setMediaPreviews([]);
      } else {
        setError("Failed to create post. Please try again.");
      }
    } catch (err) {
      console.error("Error creating post:", err);
      setError(
        err.response?.data?.message || "An error occurred while creating the post."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`bg-gray-50 p-4 rounded-lg ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      {/* Textarea for post content */}
      <textarea
        placeholder="What's on your mind?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        disabled={isLoading}
        className={`w-full p-2 rounded-lg border ${
          isDarkMode ? "border-gray-700" : "border-gray-300"
        } placeholder-gray-500 ${
          isDarkMode ? "text-white" : "text-gray-900"
        } focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
        rows="3"
      ></textarea>

      {/* Media Upload Section */}
      <div className="mt-4">
        <label
          htmlFor="media-upload"
          aria-label="Upload media"
          className={`cursor-pointer inline-block px-4 py-2 rounded-lg ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
          } hover:${isDarkMode ? "bg-gray-600" : "bg-gray-300"} ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Upload Media
        </label>
        <input
          id="media-upload"
          type="file"
          accept="image/*, video/*" // Allow both images and videos
          multiple
          onChange={handleMediaUpload}
          className="hidden"
          disabled={isLoading}
        />
      </div>

      {/* Media Previews */}
      {mediaPreviews.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {mediaPreviews.map((preview, index) => (
            <div key={index} className="relative">
              {preview.type === "image" ? (
                <Image
                  src={preview.url}
                  alt={`Media preview ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
              ) : (
                <video
                  src={preview.url}
                  controls
                  className="rounded-lg object-cover w-24 h-24"
                />
              )}
              <button
                onClick={() => handleRemoveMedia(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p
          className={`mt-4 text-sm ${
            isDarkMode ? "text-red-400" : "text-red-600"
          }`}
        >
          {error}
        </p>
      )}

      {/* Post Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${
          isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isLoading ? "Posting..." : "Post"}
      </button>
    </div>
  );
};

export default CreatePost;