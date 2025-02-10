
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "@components/profile/Post";
import { UserCircle, Plus } from 'lucide-react';
import { getCurrentUser } from "@utils/authUtils";

// Suggestion Component
const SuggestionCard = ({ user, onConnect }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center">
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            alt={user.username}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <UserCircle className="w-10 h-10 text-gray-400" />
        )}
        <div className="ml-3">
          <p className="font-medium text-sm text-gray-900 dark:text-gray-100">{user.username}</p>
          {user.mutualConnections && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user.mutualConnections} mutual connections
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => onConnect(user._id)}
        className="flex items-center px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-full"
      >
        <Plus className="w-4 h-4 mr-1" />
        Connect
      </button>
    </div>
  );
};

export default SuggestionCard