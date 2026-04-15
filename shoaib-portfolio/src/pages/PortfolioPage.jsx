import React, { useEffect } from "react";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  useEffect(() => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    const handleMenuToggle = () => {
      menuToggle?.classList.toggle("active");
      mobileNav?.classList.toggle("active");
    };

    const handleNavLinkClick = () => {
      menuToggle?.classList.remove("active");
      mobileNav?.classList.remove("active");
    };

    menuToggle?.addEventListener("click", handleMenuToggle);
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // Sticky Header Effect
    const header = document.getElementById("header");
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }

      lastScroll = currentScroll;
    };

    // Active Section Highlight
    const sections = document.querySelectorAll("section[id], div[id]");
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

    const handleActiveSection = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href")?.slice(1) === current) {
          link.classList.add("active");
        }
      });
    };

    // Skills Section Animation
    const skillCards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    skillCards.forEach((card) => {
      observer.observe(card);
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      menuToggle?.removeEventListener("click", handleMenuToggle);
      mobileNavLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
      observer.disconnect();
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="portfolio-page">
      {/* Background Effects */}
      <div className="bg-grid"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* STICKY HEADER */}
      <header className="header" id="header">
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <a href="/Portfolio/" className="nav-name">
                Muhammad Shoaib
              </a>
            </div>

            <button
              className="menu-toggle"
              id="menuToggle"
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="desktop-nav">
              <ul className="nav-links">
                <li>
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-link">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav-right">
              <a href="mailto:shoaibhanif163@gmail.com" className="hire-btn">
                <i className="fas fa-briefcase"></i>
                Hire Me
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <ul className="mobile-nav" id="mobileNav">
        <li>
          <a href="#home" className="mobile-nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="mobile-nav-link">
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" className="mobile-nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="mobile-nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="mobile-nav-link">
            Contact
          </a>
        </li>
      </ul>

      <div className="container main-container">
        {/* Hero Section */}
        <div className="hero" id="home">
          <div className="hero-content">
            <div className="status-bar">
              <span className="status-indicator">
                <span className="pulse"></span>
                <span>Open to work</span>
              </span>
              <span className="availability">• Available for freelance</span>
            </div>

            <p className="greeting">initializing_portfolio...</p>

            <h1 className="name">Muhammad Shoaib</h1>
            <p className="title">
              <strong>Frontend Developer</strong> crafting digital experiences
            </p>

            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
                <span className="terminal-title">
                  about.Shoaib — ~/portfolio
                </span>
              </div>
              <div className="terminal-body">
                <div className="code-line">
                  <span className="line-num">1</span>
                  <span className="code-text">
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-function">developer</span> = {"{"}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">2</span>
                  <span className="code-text">
                    &nbsp;&nbsp;role:{" "}
                    <span className="code-string">"Frontend Developer"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">3</span>
                  <span className="code-text">
                    &nbsp;&nbsp;experience:{" "}
                    <span className="code-string">"2+ years"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">4</span>
                  <span className="code-text">
                    &nbsp;&nbsp;stack: [
                    <span className="code-string">"CSS"</span>,{" "}
                    <span className="code-string">"React"</span>,{" "}
                    <span className="code-string">"JavaScript"</span>],
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">5</span>
                  <span className="code-text">
                    &nbsp;&nbsp;passion:{" "}
                    <span className="code-string">
                      "Building scalable products"
                    </span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-num">6</span>
                  <span className="code-text">
                    {"}"}{" "}
                    <span className="code-comment">
                      // Let's build something amazing together
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-value">06+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-value">2+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat">
                <span className="stat-value">06+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>

            <div className="cta-group">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Start Project
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="profile-card">
            <div className="card-glow"></div>
            <div className="card">
              <div className="profile-image-wrapper">
                <img
                  src="/assets/Gemini_Generated_Image_55mw555mw555mw55.png"
                  alt="Muhammad Shoaib"
                  className="profile-image"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="tech-stack">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Shopify</span>
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">Amazon</span>
                <span className="tech-tag">Meta Ads</span>
                <span className="tech-tag">Digital Marketing</span>
                <span className="tech-tag">TikTok Ads</span>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/mshoaib016"
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~0193824f473b9931d6"
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-upwork"></i>
                  Upwork
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="timeline-section" id="about">
          <div className="section-header">
            <span className="section-label">// Journey</span>
            <h2 className="section-title">My Path</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Web Foundations</h3>
                <ul className="timeline-list">
                  <li>Learned HTML & CSS basics</li>
                  <li>Mastered JavaScript fundamentals</li>
                  <li>Responsive Design principles</li>
                  <li>Basic DOM manipulation</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Powering Stores with Shopify</h3>
                <ul className="timeline-list">
                  <li>Shopify Theme Development</li>
                  <li>Advanced Shopify Liquid Customization</li>
                  <li>Responsive Shopify Store Design</li>
                  <li>Scalable Shopify Theme Architecture</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Social Media Marketing</h3>
                <ul className="timeline-list">
                  <li>Social Media Strategy</li>
                  <li>Paid Social Advertising</li>
                  <li>Brand Awareness Campaigns</li>
                  <li>Content Planning & Creation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <div className="section-header">
            <span className="section-tag">Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-desc">
              Technologies and tools I work with daily
            </p>
          </div>

          <div className="skills-grid">
            {/* React */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar react"
                    data-percent="90"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon react">
                    <i className="fab fa-react"></i>
                  </div>
                  <span className="skill-percent">90%</span>
                </div>
              </div>
              <div className="skill-name">React</div>
            </div>

            {/* Node.js */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar node"
                    data-percent="85"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon node">
                    <i className="fab fa-node-js"></i>
                  </div>
                  <span className="skill-percent">85%</span>
                </div>
              </div>
              <div className="skill-name">Node.js</div>
            </div>

            {/* JavaScript */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar js"
                    data-percent="95"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon js">
                    <i className="fab fa-js"></i>
                  </div>
                  <span className="skill-percent">95%</span>
                </div>
              </div>
              <div className="skill-name">JavaScript</div>
            </div>

            {/* TypeScript */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar ts"
                    data-percent="80"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon ts">
                    <i className="fab fa-js"></i>
                  </div>
                  <span className="skill-percent">80%</span>
                </div>
              </div>
              <div className="skill-name">TypeScript</div>
            </div>

            {/* HTML */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar html"
                    data-percent="95"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon html">
                    <i className="fab fa-html5"></i>
                  </div>
                  <span className="skill-percent">95%</span>
                </div>
              </div>
              <div className="skill-name">HTML</div>
            </div>

            {/* CSS */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar css"
                    data-percent="90"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon css">
                    <i className="fab fa-css3-alt"></i>
                  </div>
                  <span className="skill-percent">90%</span>
                </div>
              </div>
              <div className="skill-name">CSS</div>
            </div>

            {/* Shopify */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar shopify"
                    data-percent="88"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon shopify">
                    <i className="fab fa-shopify"></i>
                  </div>
                  <span className="skill-percent">88%</span>
                </div>
              </div>
              <div className="skill-name">Shopify</div>
            </div>

            {/* WordPress */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar wordpress"
                    data-percent="82"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon wordpress">
                    <i className="fab fa-wordpress"></i>
                  </div>
                  <span className="skill-percent">82%</span>
                </div>
              </div>
              <div className="skill-name">WordPress</div>
            </div>

            {/* eBay */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar ebay"
                    data-percent="75"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon ebay">
                    <i className="fab fa-ebay"></i>
                  </div>
                  <span className="skill-percent">75%</span>
                </div>
              </div>
              <div className="skill-name">eBay</div>
            </div>

            {/* Amazon */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar amazon"
                    data-percent="78"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon amazon">
                    <i className="fab fa-amazon"></i>
                  </div>
                  <span className="skill-percent">78%</span>
                </div>
              </div>
              <div className="skill-name">Amazon</div>
            </div>

            {/* Walmart */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar walmart"
                    data-percent="70"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon walmart">
                    <i className="fas fa-store"></i>
                  </div>
                  <span className="skill-percent">70%</span>
                </div>
              </div>
              <div className="skill-name">Walmart</div>
            </div>

            {/* Social Media */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar social"
                    data-percent="85"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon social">
                    <i className="fas fa-share-alt"></i>
                  </div>
                  <span className="skill-percent">85%</span>
                </div>
              </div>
              <div className="skill-name">Social Media</div>
            </div>

            {/* Digital Marketing */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar digital"
                    data-percent="88"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon digital">
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <span className="skill-percent">88%</span>
                </div>
              </div>
              <div className="skill-name">Digital Marketing</div>
            </div>

            {/* Meta Ads */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar meta"
                    data-percent="82"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon meta">
                    <i className="fab fa-meta"></i>
                  </div>
                  <span className="skill-percent">82%</span>
                </div>
              </div>
              <div className="skill-name">Meta Ads</div>
            </div>

            {/* TikTok */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar tiktok"
                    data-percent="80"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon tiktok">
                    <i className="fab fa-tiktok"></i>
                  </div>
                  <span className="skill-percent">80%</span>
                </div>
              </div>
              <div className="skill-name">TikTok</div>
            </div>

            {/* Content Writing */}
            <div className="skill-card">
              <div className="circular-progress">
                <svg viewBox="0 0 140 140">
                  <circle
                    className="progress-bg"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                  <circle
                    className="progress-bar content"
                    data-percent="90"
                    cx="70"
                    cy="70"
                    r="60"
                  ></circle>
                </svg>
                <div className="progress-content">
                  <div className="skill-icon content">
                    <i className="fas fa-pen-nib"></i>
                  </div>
                  <span className="skill-percent">90%</span>
                </div>
              </div>
              <div className="skill-name">Content Writing</div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section" id="projects">
          <div className="section-header">
            <span className="section-label">// Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/Globaxify.png" alt="Globaxify" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://globaxify.online/"
                      className="project-link"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">Web Platform</div>
                <h3 className="project-title">Globaxify Official Website</h3>
                <p className="project-description">
                  Modern business website designed to showcase services, team
                  expertise, and client engagement with a clean UI.
                </p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/Taqwa.png" alt="Taqwa" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://taqwa.services/"
                      className="project-link"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">Business Website</div>
                <h3 className="project-title">Taqwa Services Platform</h3>
                <p className="project-description">
                  A professional service-based website designed to present
                  digital solutions and enhance online presence.
                </p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/Secret Wear.png" alt="Secret Wear" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://secretwear.site/"
                      className="project-link"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">E-Commerce Platform</div>
                <h3 className="project-title">SecretWear Online Store</h3>
                <p className="project-description">
                  A modern fashion e-commerce website designed to showcase
                  trendy products with a smooth shopping experience.
                </p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Custom Liquid</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/Arqi Lounging.png" alt="Arqi Lounging" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://arqilounging.com/"
                      className="project-link"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">Business Website</div>
                <h3 className="project-title">Arqi Lounging Platform</h3>
                <p className="project-description">
                  A modern and elegant website designed to showcase premium
                  lounging experiences and brand identity.
                </p>
                <div className="project-tech">
                  <span>Shopify</span>
                  <span>Liquid</span>
                  <span>Shopify Apps</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/Bubu lab.png" alt="Bubu Lab" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://www.bubulabstore.com/"
                      className="project-link"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">E-Commerce Website</div>
                <h3 className="project-title">Bubulab Store</h3>
                <p className="project-description">
                  A modern WordPress-based e-commerce website designed to
                  showcase products with smooth navigation.
                </p>
                <div className="project-tech">
                  <span>WordPress</span>
                  <span>Plugins</span>
                  <span>Elementor</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/End.png" alt="END Clothing" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://www.endclothing.com/gb"
                      className="project-link"
                      title="Live Demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">E-Commerce Platform</div>
                <h3 className="project-title">END Clothing Store</h3>
                <p className="project-description">
                  A high-performance fashion e-commerce website handling
                  large-scale user traffic with modern interface.
                </p>
                <div className="project-tech">
                  <span>Custom Liquid</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="section-header">
            <span className="section-label">// Connect</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-label">Email</div>
                <a
                  href="mailto:shoaibhanif163@gmail.com"
                  className="contact-value"
                >
                  shoaibhanif163@gmail.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-label">Phone</div>
                <a href="tel:+923007364016" className="contact-value">
                  +92 300 7364016
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-label">Location</div>
                <span className="contact-value">Remote / Worldwide</span>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-label">Availability</div>
                <span className="contact-value">24/7</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2024 <span>Muhammad Shoaib</span>. All rights reserved.
            </p>
            <a
              href="#"
              className="footer-backtop"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span>Back to Top</span> <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioPage;
