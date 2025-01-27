"use client";
import "@styles/globals.css";
import axios from "axios";
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const Page = () => {
  const theme = useSelector((state) => state.theme);
  const router = useRouter();

  const isDarkMode = theme === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [almaMater, setAlmaMater] = useState(''); // New state for Alma mater
  const [lastYearOfEducation, setLastYearOfEducation] = useState(''); // New state for Year of education
  const [message, setMessage] = useState('');
  const [loading,setLoading]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    
    try {
      const routePath = window.location.pathname; // Capture the current route
      const isAlumniRoute = routePath.includes('Alumni'); // Check if the route contains "Alumni"
      console.log(isAlumniRoute)
      const response = await axios.post(
        'http://localhost:5000/api/auth/',
        { username: name, email, password, dob, almaMater, lastYearOfEducation },
        {
          headers: {
            'X-Source-Route': routePath, // Adding the custom header indicating the current route,
            'X-Source-Is-Type' : isAlumniRoute ? 'Alumni' : 'Student' 
          }
        }
      );

      console.log(response);
      setMessage('Signup successful');
      setTimeout(() => {
        router.push("/Signin"); // Redirect to the home page or any other page
      }, 1000);
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setMessage('Failed to register. Please try again');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
};

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} flex flex-col justify-center sm:px-6 lg:px-8`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className={`text-center text-3xl leading-9 font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Register yourself
        </h2>
        <p className={`mt-2 text-center text-sm leading-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Or <br />
          <Link href="/Signin">
            <p className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              login to your account
            </p>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`py-8 px-4 shadow sm:rounded-lg sm:px-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <form method="POST" onSubmit={handleSubmit} action="#">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="John Doe" type="text" required
                  className={`appearance-none block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 placeholder-gray-500 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900'} rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5`} />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="dob" className={`block text-sm font-medium leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Date of birth
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="dob" value={dob} onChange={(e) => setDob(e.target.value)} name="dob" placeholder="user@example.com" type="date"
                  required
                  className={`appearance-none block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 placeholder-gray-500 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900'} rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5`} />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className={`block text-sm font-medium leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="user@example.com" type="email"
                  required
                  className={`appearance-none block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 placeholder-gray-500 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900'} rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5`} />
              </div>
            </div>

            {/* New Alumni of Field */}
            <div className="mt-6">
              <label htmlFor="almaMater" className={`block text-sm font-medium leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Alumni of
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input value={almaMater} onChange={(e) => setAlmaMater(e.target.value)} id="almaMater" name="almaMater" placeholder="Alma mater" type="text" required
                  className={`appearance-none block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 placeholder-gray-500 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900'} rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5`} />
              </div>
            </div>

            {/* New Last Year of Education Field */}
            <div className="mt-6">
              <label htmlFor="yearOfEducation" className={`block text-sm font-medium leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Last year of education
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input value={lastYearOfEducation} onChange={(e) => setLastYearOfEducation(e.target.value)} id="yearOfEducation" name="yearOfEducation" placeholder="e.g., 2022" type="date" required
                  className={`appearance-none block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 placeholder-gray-500 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900'} rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5`} />
              </div>
            </div>


            
            <div className="mt-6">
              <label htmlFor="password" className={`block text-sm font-medium leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required
                  className={`appearance-none block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 placeholder-gray-500 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900'} rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5`} />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="password_confirmation" className={`block text-sm font-medium leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="password_confirmation" name="password_confirmation" type="password" required
                  className={`appearance-none block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 placeholder-gray-500 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900'} rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5`} />
              </div>
            </div>


            <div className="mt-6">
              <span className={`block w-full rounded-md shadow-sm`}>
                <button type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                  Register
                </button>
              </span>
            </div>
          </form>
          {message && (
            <div className={`mt-4 text-center ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
