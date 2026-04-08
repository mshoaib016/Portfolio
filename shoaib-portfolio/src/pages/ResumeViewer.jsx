import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ResumeViewer.css';

const ResumeViewer = () => {
  return (
    <>
      <Helmet>
        <title>Resume | Muhammad Shoaib</title>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </Helmet>
      
      <div className="resume-viewer">
        <div className="toolbar">
          <a href="/" className="back-btn">
            <i className="fas fa-arrow-left"></i> Back to Home
          </a>
          <a 
            href="/assets/Muhammad Shoaib Professional Resume (2).pdf" 
            download 
            className="download-btn"
          >
            <i className="fas fa-download"></i> Download
          </a>
        </div>
        
        <iframe 
          src="/assets/Muhammad Shoaib Professional Resume (2).pdf" 
          title="Resume"
          className="pdf-frame"
        />
      </div>
    </>
  );
};

export default ResumeViewer;