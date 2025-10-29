import React from "react";
import Illustrator from "../assets/images/Illustrator.png";

function SupportSection() {
  return (
    <section className="support-section">
      <div className="container support1">
        <div className="support-content ">
          <div className="support-tag">ALWALYS ONLINE</div>
          <h2 className="support-title">Real-time support with cloud</h2>
          <p className="support-text">
            Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
            accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget
            ut.
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

        <div className="support-image">
          <img src={Illustrator} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
