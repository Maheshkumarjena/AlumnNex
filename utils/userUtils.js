
export const getProfile = async () => {
    try {
        const response = await axios.get('/api/profile', { withCredentials: true });
        console.log('User details: ', response.data);
        return response.data; // Handle user data
    } catch (error) {
        console.error('Error fetching profile: ', error.response.data.message);
        return null;
    }
};

export const getCurrentUserStatus = () => {
    if (typeof window !== 'undefined') { // Ensure this code runs only in the browser
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        const { value, expiry } = JSON.parse(storedUser);
        if (new Date().getTime() < expiry) {
          return true; // User is still logged in
        }
        // If expired, remove from localStorage
        localStorage.removeItem('currentUser');
      }
    }
    return false; // User is not logged in
  };
  

  export const getCurrentUser = () => {
    if (typeof window !== 'undefined') { // Ensure this code runs only in the browser
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          return user; // Return the parsed user object
        }
      } catch (error) {
        console.error('Failed to retrieve or parse the current user data:', error);
        return null; // Return null if there is an error
      }
    } else {
      console.warn('localStorage is not available on the server.');
      return null; // Return null if not in browser environment
    }
  };
  
  // Usage example
  