import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQFO3rUjeZkoEhecvYwXXKpimpVeSQol4",
    authDomain: "nullclass-c1c61.firebaseapp.com",
    projectId: "nullclass-c1c61",
    storageBucket: "nullclass-c1c61.firebasestorage.app",
    messagingSenderId: "234970760251",
    appId: "1:234970760251:web:e0d76c2152e392ebc4081e",
    measurementId: "G-9CL985ZMK1"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };

