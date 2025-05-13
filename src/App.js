// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import UploadVideo from "./Uploadvideo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
