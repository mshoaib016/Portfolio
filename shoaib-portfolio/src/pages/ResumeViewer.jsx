import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ResumeViewer.css';

const ResumeViewer = () => {
  const pdfUrl = "https://mshoaib016.github.io/Portfolio/assets/resume.pdf";
  
  return (
    <>
      <Helmet>
        <title>Resume | Muhammad Shoaib</title>
      </Helmet>
      
      <div className="resume-viewer">
        <div className="toolbar">
          <a href="/Portfolio/" className="back-btn">
            <i className="fas fa-arrow-left"></i> Back to Home
          </a>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="download-btn">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>

        {/* Desktop - iframe */}
        <iframe 
          src={`https://docs.google.com/viewer?url=${pdfUrl}&embedded=true`}
          title="Resume"
          className="pdf-frame desktop-only"
        />

        {/* Mobile - Direct link */}
        <div className="mobile-only">
          <div className="mobile-resume">
            <i className="fas fa-file-pdf"></i>
            <p>Muhammad Shoaib Resume</p>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="view-btn">
              <i className="fas fa-eye"></i> Open Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeViewer;