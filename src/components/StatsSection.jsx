import React from "react";
import Screenshot22 from "../assets/images/Screenshot22.png";
import Screenshot23 from "../assets/images/Screenshot23.png";
import Screenshot24 from "../assets/images/Screenshot24.png";
import Screenshot25 from "../assets/images/Screenshot25.png";

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-content">
          <h2 className="stats-title">
            20M+ downloaded from 32 different countries
          </h2>
          <p className="stats-subtitle">
            Try demo for 7 days with full features.
          </p>
          <button className="demo-button4">
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
                stroke="#FF7235"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="illustrations-wrapper">
          <div className="illustration-group">
            <div className="illustration-card">
              <div className="illustration-image">
                <img src={Screenshot22} alt="Singer with mic"  className="photo1"/>
              </div>
            </div>
            <div className="illustration-card">
              <div className="illustration-image">
                <img src={Screenshot23} alt="Man with coffee and tablet"  />
              </div>
            </div>
            <div className="illustration-card">
              <div className="illustration-image">
                <img src={Screenshot24} alt="Woman with gift" />
              </div>
            </div>
            <div className="illustration-card">
              <div className="illustration-image">
                <img src={Screenshot25} alt="Magician with wand" className="photo1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
