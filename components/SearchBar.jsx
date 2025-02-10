"use client";
import { useSelector } from "react-redux";
import { Search } from "lucide-react";

const SearchBar = () => {
  const theme = useSelector((state) => state.theme); // Getting theme from Redux

  return (
    <div className={`w-full shadow-sm rounded-lg p-2 mb-6 ${
      theme === "dark" ? "bg-gray-800" : "bg-white"
    }`}>
      <div className="relative">
        <Search className={`absolute left-3 top-2.5 h-5 w-5 ${
          theme === "dark" ? "text-gray-300" : "text-gray-400"
        }`} />
        <input
          type="text"
          placeholder="Search posts, people, or topics..."
          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            theme === "dark"
              ? "border-gray-700 bg-gray-900 text-gray-100"
              : "border-gray-300 bg-white text-gray-900"
          }`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
