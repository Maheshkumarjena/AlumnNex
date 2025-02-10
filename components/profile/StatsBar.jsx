import { useSelector } from "react-redux";

const StatsBar = ({ user }) => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  const stats = [
    { label: "Posts", value: user.posts?.length || 0 },
    { label: "Connections", value: user.connections?.length || 0 },
    { label: "Views", value: user.profileViews || 0 },
  ];

  return (
    <div
      className={`flex justify-around mt-6 py-4 border-t border-b text-center ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      }`}
    >
      {stats.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <span className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            {value}
          </span>
          <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
