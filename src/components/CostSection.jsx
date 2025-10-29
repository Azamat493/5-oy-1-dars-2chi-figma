import React from "react";
import Illustrator1 from "../assets/images/Illustrator1.png";

function CostSection() {
  return (
      <section className="cost-section">
          <div className="container cost1">
      <div className="cost-image">
        <img src={Illustrator1} alt="Woman working at desk with dog"></img>
      </div>

      <div className="cost-content">
        <div className="cost-tag">FREE SOME COST</div>
        <h2 className="cost-title">Save cost for you and family</h2>
        <p className="cost-text">
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
              </div>
    </section>
  );
}

export default CostSection;
