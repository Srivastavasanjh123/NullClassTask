// src/login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase"; // Named import for app
import "./Login.css";

const Login = () => {
  const auth = getAuth(app); // Use the imported app here
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      
      // ✅ Redirect to UploadVideo page after login
      navigate("/upload");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In / Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
