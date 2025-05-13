// src/UploadVideo.js
import React, { useState } from "react";
import "./UploadVideo.css";
import studyGif from "./assets/study-gif.gif"; // Importing the gif

const UploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState("");

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 50 * 1024 * 1024) { // 50MB limit
      setVideo(file);
    } else {
      alert("Video must be less than 50MB.");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleUpload = () => {
    if (!video) {
      alert("Please select a video to upload.");
      return;
    }
  
    // Simulate upload (replace with real upload logic)
    console.log("Video uploaded:", video);
    console.log("Message:", message);
  
    // Show success popup
    alert("Video uploaded successfully!");
    
    // Optionally reset fields
    setVideo(null);
    setMessage("");
  };
  

  return (
    <div className="upload-container" style={{ backgroundImage: `url(${studyGif})` }}>
      <h2>Upload Your Video</h2>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <textarea
        placeholder="Ask a question or send a message"
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={handleUpload}>Upload Video and Send Message</button>
    </div>
  );
  
};

export default UploadVideo;
