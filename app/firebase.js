import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Log API key for debugging (remove in production)
console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "alumnnex.firebaseapp.com",
  projectId: "alumnnex",
  storageBucket: "alumnnex.firebasestorage.app",
 messagingSenderId: "674802037511",
  appId: "1:674802037511:web:8e8cb9e68de8d491c18ba2",
  measurementId: "G-N40085DSB9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Export auth directly
export default app;