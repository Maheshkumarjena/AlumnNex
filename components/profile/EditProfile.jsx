"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";
  const router = useRouter();

  // Example user data (replace with actual user data from Redux or API)
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    username: "@john_doe",
    bio: "Computer Science Student at XYZ University | Aspiring Software Engineer",
    location: "New York, NY",
    website: "https://john-doe-portfolio.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user details (e.g., API call)
    console.log("Updated User Details:", userDetails);
    router.push("/Profile"); // Redirect to profile page after saving
  };

  return (
    <div className={`min-h-screen p-4 ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      <div className={`max-w-4xl mx-auto rounded-lg shadow-md p-6 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}>
        <h1 className={`text-2xl font-bold mb-6 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={userDetails.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={userDetails.username}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              value={userDetails.bio}
              onChange={handleChange}
              rows="3"
              className={`mt-1 block w-full px-3 py-2 border ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={userDetails.location}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Website
            </label>
            <input
              type="url"
              name="website"
              id="website"
              value={userDetails.website}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              }`}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <Link
              href="/Profile"
              className={`px-4 py-2 rounded-lg ${
                isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Cancel
            </Link>
            <button
              type="submit"
              className={`px-4 py-2 rounded-lg ${
                isDarkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;