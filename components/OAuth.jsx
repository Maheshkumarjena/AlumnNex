import React, { useState, useEffect } from 'react';
import app, { auth } from "@app/firebase";
import axios from "@node_modules/axios";
import { signInSuccess } from "@store/features/user/userSlice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function OAuthButton() {
    const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === 'dark';
    const router = useRouter();
    const dispatch = useDispatch();
    const [accountType, setAccountType] = useState(null); // Track account type selection
    const [isAccountTypeSelected, setIsAccountTypeSelected] = useState(false); // Track if account type has been selected
    const [userInfo, setUserInfo] = useState(null); // Store user info after Google login
    const [isLoading, setIsLoading] = useState(false); // Track loading state to prevent submitting again
    const [isSubmitted, setIsSubmitted] = useState(false); // Track whether the form has been submitted
    const [message, setMessage] = useState(''); // Display success or error message
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            // Store user info after successful Google login
            setUserInfo({
                username: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                _id: result.user.uid,
            });

            // Show account type selection modal
            setIsAccountTypeSelected(true);
            console.log("google signin",result)
            console.log("user Info", userInfo);
            
        } catch (error) {
            console.error("Could not login with Google", error);
        }
    };

    // Handle account type selection
    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
    };

    // Handle account type submission
    const handleAccountTypeSubmit = async () => {
        if (!accountType) {
            alert("Please select an account type.");
            return;
        }

        try {
            setIsLoading(true); // Disable UI interactions while submitting

            const res = await axios.post('http://localhost:5000/api/auth/google', {
                ...userInfo, // send user info from state
                accountType,
            },{
                withCredentials: true,
              });

            const data = await res.data;
            console.log("Successfully logged in with Google:", data);
            dispatch(signInSuccess({username:data.user.username,email:data.user.email , dob:data.user?.dob || ' ',userType:data.user?.userType || ' ', profilePicture:data.user?.profilePicture || " ", id:data.user._id}));

            // Mark as submitted after successful submission
            setIsSubmitted(true); 
            setMessage('Sigin successful!');
            setTimeout(() => {
                router.push("/");
                setMessage('') // Redirect to the home page or any other page
              }, 1000);
        } catch (error) {
            console.error("Error during account type submission:", error);

            // Mark as submitted after error response
            setIsSubmitted(true);
        } finally {
            setIsLoading(false); // Re-enable UI after submission
        }
    };

    // Close modal after submission (success or error)
    useEffect(() => {
        if (isSubmitted) {
            setIsAccountTypeSelected(false); // Close modal after submission
        }
    }, [isSubmitted]); // Only run effect when isSubmitted changes

    // Close modal
    const closeModal = () => {
        setIsAccountTypeSelected(false);
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleGoogleClick}
                className="flex mt-2 items-center justify-center w-full bg-white border border-gray-300 text-gray-700 font-medium rounded-lg px-4 py-2 shadow-md hover:bg-gray-100 transition-all"
            >
                Continue with Google
            </button>

            {/* Overlay to block interactions when modal is active */}
            {isAccountTypeSelected && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"></div>
            )}

            {/* Account Type Modal */}
            {isAccountTypeSelected && (
                <div className="fixed inset-0 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-semibold mb-4">Select Account Type</h3>

                        <div className="mb-4">
                            <input
                                type="radio"
                                id="student"
                                name="accountType"
                                value="student"
                                onChange={handleAccountTypeChange}
                            />
                            <label htmlFor="student" className="ml-2">Student</label>
                        </div>
                        <div className="mb-4">
                            <input
                                type="radio"
                                id="alumni"
                                name="accountType"
                                value="alumni"
                                onChange={handleAccountTypeChange}
                            />
                            <label htmlFor="alumni" className="ml-2">Alumni</label>
                        </div>

                        <div className="flex justify-between">
                            <button
                                onClick={handleAccountTypeSubmit}
                                disabled={isLoading}
                                className={`bg-blue-500 text-white px-4 py-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Submitting...' : 'Submit'}
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 text-black px-4 py-2 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {message && (
            <div className={`mt-4 text-center ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
              {message}
            </div>
          )}
        </div>
    );
}
