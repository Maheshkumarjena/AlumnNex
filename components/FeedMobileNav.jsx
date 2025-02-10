"use client";
import { useSelector } from "react-redux";
import { Home, Bell, UserPlus, Bookmark } from "lucide-react";

const MobileNavBar = () => {
  const theme = useSelector((state) => state.theme); // Get theme from Redux

  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home" },
    { icon: <Bell className="w-6 h-6" />, label: "Notifications" },
    { icon: <UserPlus className="w-6 h-6" />, label: "Requests" },
    { icon: <Bookmark className="w-6 h-6" />, label: "Saved" },
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 border-t md:hidden p-2 ${
        theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center p-2 transition-colors duration-200 ${
              theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
            }`}
          >
            <span>{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavBar;
