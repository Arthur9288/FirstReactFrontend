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
          <img src={logo512} alt="Caveira Logo" className="logo" />
          <span className="brand">Your App</span>
        </div>
        <div className="nav-links">
          <a href="#">Solutions and Services</a>
          <a href="#">Integrations</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </div>
        <div className="nav-right">
          <span className="sales">Sales: +11 (11) 111-1111</span>
          <button className="login">Log In</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h3>#1 HORSING AROUND AND PLATFORM*</h3>
        <h1>Turn Emailssss into Revenue</h1>
        <p>
          Millions of businesses count on our site to drive sales.
        </p>
        <button className="signup">Sign Up</button>
      </div>

      {/* Statistics */}
      <div className="stats">
        <div className="stat">
          <strong>11M+</strong>
          <span>Of numbers</span>
        </div>
        <div className="stat">
          <strong>&gt;99%</strong>
          <span>of 100%</span>
        </div>
        <div className="stat">
          <strong>500M</strong>
          <span>Of something</span>
        </div>
        <div className="stat">
          <strong>8M+</strong>
          <span>Times zero</span>
        </div>
      </div>
       
    </header>
  );
};

export default TopFold;
