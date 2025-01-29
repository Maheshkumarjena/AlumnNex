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
      state.loading=false
      state.currentUser=action.payload
    },
    signInFailure:(state)=>{
      state.loading=false
      state.error=action.payload
    },

    add: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      state.users = [];
      setLoggedInStatus(state, false);

      const timestamp = Date.now();
      setLoggedInStatus(state, true, timestamp);

      state.users.push(action.payload);
      sessionStorage.setItem('loggedInUser', JSON.stringify(action.payload));
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
