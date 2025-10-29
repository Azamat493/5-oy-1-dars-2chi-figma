import React from "react";
import Image from "../assets/images/Image.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import Image5 from "../assets/images/Image5.png";

function DashboardSection() {
  return (
    <section className="dashboard-section ">
      <div className="container">
        <div className="dash-img">
          <img src={Image} alt="" />
        </div>
        <div className="images">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image1} alt="" />
          </a>
          <a
            href="https://www.google.com/?hl=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image2} alt="" />
          </a>
          <a
            href="https://www.coca-cola.com/uz/ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image3} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Image5} alt="" />
          </a>
          <a
            href="https://www.samsung.com/uz_ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image4} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default DashboardSection;
