"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import themeReducer from './features/theme/themeSlice'
import { theme } from '@tailwind.config'
import persistCombineReducers from 'redux-persist/es/persistCombineReducers'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'

const rootReducer=combineReducers({user:userReducer,theme:themeReducer}) ;

const persistConfig ={
  key:'root',
  version:1,
  storage 
}

const persistedReducer = persistReducer (persistConfig, rootReducer)

export const store = configureStore({
  reducer: 
gpersistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),

})

export const persistor=persistStore(store);