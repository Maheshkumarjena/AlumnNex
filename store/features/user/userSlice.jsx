import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserStatus } from '@utils/userUtils';
const initialState = {
  currentUser: null,
  loading: false,
  error: null, // Default to null for error state
  loggedIn: getCurrentUserStatus(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;

      // Save user data to localStorage with an expiration time of 30 days
      const currentUserWithExpiry = {
        value: action.payload,
        expiry: new Date().getTime() + 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
      };
      localStorage.setItem('currentUser', JSON.stringify(currentUserWithExpiry));
      state.loggedIn = true;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.loggedIn = false;
    },

    logout: (state) => {
      console.log('Logging out');
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.loggedIn = false;
      localStorage.removeItem('currentUser');
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, logout } = userSlice.actions;

export default userSlice.reducer;
