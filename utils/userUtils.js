
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

