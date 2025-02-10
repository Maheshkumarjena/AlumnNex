import React from 'react';
import { UserCircle } from 'lucide-react';

const ConnectionCard = ({ connection }) => {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        {connection.profilePicture ? (
          <img
            src={connection.profilePicture}
            alt={connection.username}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <UserCircle className="w-12 h-12 text-gray-400" />
        )}
      </div>
      <div className="ml-4">
        <h3 className="font-medium text-gray-900 dark:text-gray-100">
          {connection.username}
        </h3>
      </div>
    </div>
  );
};

const ConnectionsSection = ({ connections = [] }) => {
  if (connections.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No connections yet</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Connections ({connections.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {connections.map((connection) => (
          <ConnectionCard key={connection._id} connection={connection} />
        ))}
      </div>
    </div>
  );
};

export default ConnectionsSection;