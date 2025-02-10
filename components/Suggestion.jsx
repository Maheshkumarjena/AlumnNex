"use client"
import SuggestionCard from "./SuggestionCard";

const Suggestions = () => {
    const suggestionsList = [
      { _id: '1', username: 'John Doe', profilePicture: null, mutualConnections: 12 },
      { _id: '2', username: 'Sarah Wilson', profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg', mutualConnections: 8 },
      { _id: '3', username: 'Mike Chen', profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg', mutualConnections: 5 },
      { _id: '4', username: 'Emma Thompson', profilePicture: null, mutualConnections: 3 },
    ];
  
    const handleConnect = (userId) => {
      console.log(`Connecting with user: ${userId}`);
    };
  
    return (
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">People you may know</h2>
        <div className="space-y-3">
          {suggestionsList.map((user) => (
            <SuggestionCard key={user._id} user={user} onConnect={handleConnect} />
          ))}
        </div>
      </div>
    );
  };

  export default Suggestions