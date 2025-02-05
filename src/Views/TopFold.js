import React from "react";
import "./TopFold.css";
import logo512 from "../assets/images/logo512.png";
import logo192 from "../assets/images/logo192.png";

const TopFold = () => {
  return (
    <header className="header">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo512} alt="Mailchimp Logo" className="logo" />
          <span className="brand">Mailchimp</span>
        </div>
        <div className="nav-links">
          <a href="#">Solutions and Services</a>
          <a href="#">Integrations</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </div>
        <div className="nav-right">
          <span className="sales">Sales: +1 (800) 315-5939</span>
          <button className="login">Log In</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h3>#1 EMAIL MARKETING AND AUTOMATIONS PLATFORM*</h3>
        <h1>Turn Emails into Revenue</h1>
        <p>
          Millions of businesses count on Mailchimp's AI-powered platform to drive sales.
        </p>
        <button className="signup">Sign Up</button>
      </div>

      {/* Statistics */}
      <div className="stats">
        <div className="stat">
          <strong>11M+</strong>
          <span>Mailchimp users</span>
        </div>
        <div className="stat">
          <strong>&gt;99%</strong>
          <span>Email deliverability</span>
        </div>
        <div className="stat">
          <strong>500M</strong>
          <span>Daily emails sent</span>
        </div>
        <div className="stat">
          <strong>8M+</strong>
          <span>Recommendations given</span>
        </div>
      </div>

    </header>
  );
};

export default TopFold;
