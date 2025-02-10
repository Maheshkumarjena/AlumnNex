import { useSelector } from "react-redux";

const NavigationTabs = ({ activeTab, onTabChange }) => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  const tabs = ["Posts", "About", "Connections"];

  return (
    <div className={`border-b mt-6 ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
      <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
              activeTab === tab
                ? isDarkMode
                  ? "border-blue-400 text-blue-400"
                  : "border-blue-500 text-blue-600"
                : isDarkMode
                ? "border-transparent text-gray-400 hover:text-gray-300"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavigationTabs;
