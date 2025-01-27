"use client"
import "@styles/globals.css";
import axios from "axios";
import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import { useSelector } from 'react-redux'; // Use 'useSelector' correctly

const Page = () => {
  const theme = useSelector((state) => state.theme); 
  const isDarkMode = theme === 'dark';


// Example usage

  const [message,setMessage]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/signin',
        { email, password }, // Data payload
        {
          headers: {
            'Content-Type': 'application/json', // Headers
          },
        }
      );
  
      // If the response is successful
      if (response.status === 200) {
        const { token } = response.data; // Extract token from response
        localStorage.setItem('token', token); // Store token in localStorage
        setMessage('Login successful!');
        console.log('Login successful:', response.data);
      }
    } catch (error) {
      // Handle error
      if (error.response) {
        setMessage(error.response.data.message || 'Login failed'); // Server error message
        console.error('Error response:', error.response.data);
      } else {
        setMessage('Error during login');
        console.error('Error:', error.message);
      }
    }
  };
  
  

  return (
    <div className={`w-screen h-screen bg-gradient-to-m-r backdrop-blur-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="min-h-[90vh] max-w-[330px] m-auto flex flex-col justify-center">
        
        <div className="min-w-md sm:mx-auto sm:w-full sm:max-w-md">
          <div className={`glassmorphism border-[1px] border-black py-2 px-4 shadow sm:rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="font-bold text-2xl text-center pb-5 ">Signin</div>
            <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} placeholder-gray-500 ${isDarkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} placeholder-gray-500 ${isDarkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className={`h-4 w-4 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'} focus:ring-blue-500 border-gray-300 rounded`}
                  />
                  <label htmlFor="remember_me" className={`ml-2 block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="#" className={`font-medium ${isDarkMode ? 'text-blue-500' : 'text-blue-600'} hover:text-blue-500`}>
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`black_btn  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[30px] text-white ${isDarkMode ? 'bg-blue-700 hover:bg-green-800' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-2 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <Link href='#' className={`w-full flex items-center justify-center px-8 py-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} glassmorphism hover:bg-gray-50`}>
                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" />
                  </Link>
                </div>

                <div>
                  <Link href='#' className={`w-full flex items-center justify-center px-8 py-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} glassmorphism hover:bg-gray-50`}>
                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter" />
                  </Link>
                </div>

                <div>
                  <Link href="#" className={`w-full flex items-center justify-center px-8 py-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} glassmorphism hover:bg-gray-50`}>
                    <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="Google" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
