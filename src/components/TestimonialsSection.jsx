import React from "react";
import Ellipse2 from "../assets/images/Ellipse2.png";
import Ellipse21 from "../assets/images/Ellipse21.png";
import Ellipse22 from "../assets/images/Ellipse22.png";
function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">We have millions of best wishers</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card orange">
            <p className="testimonial-text">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={Ellipse2} alt="" />
              </div>
              <div className="author1">
                <div className="author-name">Cameron Williamson,</div>
                <div className="author-title">CEO</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card blue">
            <p className="testimonial-text">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={Ellipse21} alt="" />
              </div>
              <div className="author1">
                <div className="author-name">Cameron Williamson,</div>
                <div className="author-title">CEO</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card teal">
            <p className="testimonial-text">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={Ellipse22} alt="" />
              </div>
              <div className="author1">
                <div className="author-name">Cameron Williamson,</div>
                <div className="author-title">CEO</div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
