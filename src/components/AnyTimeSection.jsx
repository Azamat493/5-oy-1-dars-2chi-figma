import React from "react";
import Image11 from "../assets/images/Image11.png";

function AnyTimSection() {
  return (
    <section className="anytime-section">
      <div className="container">
        <div className="anytime-wrapper">
          <div className="anytime-content">
            <div className="anytime-tag">USE ANYTIME</div>
            <h2 className="anytime-title">Use anytime when you need</h2>
            <p className="anytime-text">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </p>
            <a href="#" className="learn-more">
              Learn more
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20"
                  stroke="#FF7235"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 5L20 12L13 19"
                  stroke="#FF7235"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="anytime-image">
            <img src={Image11} alt="Man on scooter with phone"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnyTimSection;
