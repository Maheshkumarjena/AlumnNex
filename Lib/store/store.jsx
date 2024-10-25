"use client"
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import themeReducer from './features/theme/themeSlice'
import { theme } from '@tailwind.config'
export const store = configureStore({
  reducer: {
    user:userReducer,
    theme:themeReducer
  },

})