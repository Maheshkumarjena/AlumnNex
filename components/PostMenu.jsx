"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faSave, faEdit, faTrash, faArchive } from "@fortawesome/free-solid-svg-icons";

const PostMenu = ({ isDarkMode, onEdit, onDelete, onSave, onArchive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-30">
      <button
        onClick={toggleMenu}
        className={`p-2 rounded-full ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"
          }`}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"
          }`}>
          <button
            onClick={onSave}
            className={`w-full px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-900 hover:bg-gray-200"
              }`}
          >
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            Save
          </button>
          <button
            onClick={onEdit}
            className={`w-full px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-900 hover:bg-gray-200"
              }`}
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </button>
          <button
            onClick={onDelete}
            className={`w-full px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-900 hover:bg-gray-200"
              }`}
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </button>
          <button
            onClick={onArchive}
            className={`w-full px-4 py-2 text-sm ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-900 hover:bg-gray-200"
              }`}
          >
            <FontAwesomeIcon icon={faArchive} className="mr-2" />
            Archive
          </button>
        </div>
      )}
    </div>
  );
};

export default PostMenu;