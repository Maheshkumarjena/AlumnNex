import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser:null ,
  loading:false,
  error:false,
  
  // loggedIn: false,
  // loggedInTimestamp: null,
};
 
const setLoggedInStatus = (state, loggedIn, timestamp = null) => {
  state.loggedIn = loggedIn;
  state.loggedInTimestamp = timestamp;

  if (loggedIn) {
    sessionStorage.setItem('loggedIn', true);
    sessionStorage.setItem('loggedInTimestamp', timestamp);
  } else {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('loggedInTimestamp');
    sessionStorage.removeItem('loggedInUser');
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart:(state)=>{
      state.loading=true
    },
    signInSuccess:(state,action)=>{
      state.loading = false;
      state.currentUser = action.payload;
    
      // Save user data to localStorage with an expiration time of 30 days
      const currentUserWithExpiry = {
        value: action.payload,
        expiry: new Date().getTime() + 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
      };
      
      localStorage.setItem('currentUser', JSON.stringify(currentUserWithExpiry));
      
    },
    signInFailure:(state)=>{
      state.loading=false
      state.error=action.payload
    },

    add: (state, action) => {
      state.users.push(action.payload);
    },
    logout: (state) => {
      setLoggedInStatus(state, false);
      state.users = [];
    },
    checkSession: (state) => {
      const loggedInUser = sessionStorage.getItem('loggedInUser');
      if (loggedInUser) {
        state.users = [JSON.parse(loggedInUser)];
      }
      checkSessionExpiration(state);
    },
  },
});

export const { add, login, logout, checkSession , signInFailure, signInStart,signInSuccess } = userSlice.actions;

export default userSlice.reducer;
