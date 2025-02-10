"use client";
import { useSelector } from "react-redux";
import { Home, Bell, UserPlus, Bookmark } from "lucide-react";

const Navigation = () => {
  const theme = useSelector((state) => state.theme); // Get theme from Redux

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", count: null },
    { icon: <Bell className="w-5 h-5" />, label: "Notifications", count: 3 },
    { icon: <UserPlus className="w-5 h-5" />, label: "Connection Requests", count: 5 },
    { icon: <Bookmark className="w-5 h-5" />, label: "Saved Posts", count: null },
  ];

  return (
    <div className={`rounded-lg shadow-sm sticky p-4 ${
      theme === "dark" ? "bg-gray-800" : "bg-white"
    }`}>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-150 ${
              theme === "dark" ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
            {item.count && (
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                theme === "dark" ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600"
              }`}>
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
