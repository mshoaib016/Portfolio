import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="landing-page">
      {/* Background Shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        <div className="toggle-slider">
          <div className="toggle-circle">
            <i
              className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}
            ></i>
          </div>
        </div>
        <span className="theme-label">Theme</span>
      </button>

      <div className="container">
        {/* Profile Image */}
        <div className="profile-wrapper">
          <div className="profile-ring"></div>
          <img
            src="/Portfolio/assets/shoaib.jpeg"
            alt="Muhammad Shoaib"
            className="profile-img"
          />
        </div>

        {/* Status */}
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>Available for work</span>
        </div>

        {/* Content */}
        <h1>Muhammad Shoaib</h1>
        <p className="subtitle">Frontend Developer</p>
        <p className="description">
          Crafting digital experiences with modern technologies. Specialized in
          React, Node.js, and cloud solutions.
        </p>

        {/* Buttons */}
        <div className="buttons-container">
          <a
            href="https://www.upwork.com/freelancers/~0193824f473b9931d6"
            className="btn btn-upwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-upwork"></i>
            Upwork
          </a>

          <a
            href="https://github.com/mshoaib016"
            className="btn btn-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>

          <a href="/Portfolio/portfolio" className="btn btn-portfolio">
            <i className="fas fa-briefcase"></i>
            Portfolio
          </a>

          <a href="/Portfolio/resume" className="btn btn-resume">
            <i className="fas fa-file-download"></i>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
