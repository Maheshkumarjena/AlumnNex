import { useSelector } from "react-redux";

const AboutSection = ({ user }) => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  const details = [
    { label: "Email", value: user.email },
    { label: "Location", value: user.location },
    { label: "Joined", value: new Date(user.createdAt).toLocaleDateString() },
    { label: "Work", value: user.work },
    { label: "Education", value: user.education },
  ];

  return (
    <div
      className={`rounded-lg shadow p-6 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">About</h2>
      <div className="space-y-4">
        {details.map(
          ({ label, value }) =>
            value && (
              <div key={label} className="flex flex-col sm:flex-row sm:justify-between">
                <span className={`text-gray-500 ${isDarkMode ? "dark:text-gray-400" : ""}`}>
                  {label}
                </span>
                <span className="font-medium">{value}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default AboutSection;
