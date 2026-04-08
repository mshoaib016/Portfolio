import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumeViewer from "./pages/ResumeViewer";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router basename="/shoaib-portfolio">
        {" "}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<ResumeViewer />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
