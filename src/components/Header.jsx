import React from "react";
import Logo from "../assets/images/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container header1">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <nav className="nav-menu">
          <a href="#features">Features</a>
          <a href="#about">About us</a>
          <a href="#pricing">Pricing</a>
          <a href="#feedback">Feedback</a>
        </nav>

        <button className="demo-button">Request a demo</button>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>

        <div className="sidebar">
          <label htmlFor="menu-toggle" className="sidebar-close">
            <i className="fas fa-xmark"></i>
          </label>
          <a href="#features">Features</a>
          <a href="#about">About us</a>
          <a href="#pricing">Pricing</a>
          <a href="#feedback">Feedback</a>
          <button className="demo-button2">Request a demo</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
