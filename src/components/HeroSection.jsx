import React from "react";
import Illustration from "../assets/images/Illustration.png";

function HeroSection() {
  return (
    <section className="hero-section container">
      <div className="hero-content ">
        <h1 className="hero-title">Track your Expenses & Save Money</h1>
        <p className="hero-subtitle">
          Helps you to organize your income and expenses
        </p>
        <button className="demo-button3">
          Try free demo
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9L12 17L20 9"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <span className="platform-info">— Web, iOS and Android</span>
      </div>
      <img src={Illustration} alt="" />
      <div className="hero-image"></div>
    </section>
  );
}

export default HeroSection;
