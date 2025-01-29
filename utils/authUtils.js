export const getCurrentUser = () => {
    const currentUserWithExpiry = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUserWithExpiry) {
      // Check if the current time is greater than the expiry time
      if (new Date().getTime() > currentUserWithExpiry.expiry) {
        // If expired, remove the data from localStorage
        localStorage.removeItem('currentUser');
        return null;
      }
      return currentUserWithExpiry.value;
    }
    return null;
  };