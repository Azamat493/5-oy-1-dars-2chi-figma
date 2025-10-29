import React from "react";
import Logo from "../assets/images/Logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">LINKS</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">LEGAL</h4>
            <ul className="footer-links">
              <li>
                <a href="#terms">Terms of use</a>
              </li>
              <li>
                <a href="#conditions">Terms of conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy policy</a>
              </li>
              <li>
                <a href="#cookie">Cookie policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">NEWSLETTER</h4>
            <p className="newsletter-subscribers">
              Over 25000 people have subscribed
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
            <p className="newsletter-disclaimer">
              We don't sell your email and spam
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy & Terms</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="copyright">Copyright @ 2022 xpence</div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.875 1.25H3.125C2.62772 1.25 2.15081 1.44754 1.79917 1.79917C1.44754 2.15081 1.25 2.62772 1.25 3.125L1.25 16.875C1.25 17.3723 1.44754 17.8492 1.79917 18.2008C2.15081 18.5525 2.62772 18.75 3.125 18.75H8.48633V12.8004H6.02539V10H8.48633V7.86562C8.48633 5.43789 9.93164 4.09687 12.1453 4.09687C13.2055 4.09687 14.3141 4.28594 14.3141 4.28594V6.66875H13.0926C11.8891 6.66875 11.5137 7.41562 11.5137 8.18164V10H14.2004L13.7707 12.8004H11.5137V18.75H16.875C17.3723 18.75 17.8492 18.5525 18.2008 18.2008C18.5525 17.8492 18.75 17.3723 18.75 16.875V3.125C18.75 2.62772 18.5525 2.15081 18.2008 1.79917C17.8492 1.44754 17.3723 1.25 16.875 1.25Z"
                  fill="#292830"
                />
              </svg>
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.875 1.25H3.125C2.08984 1.25 1.25 2.08984 1.25 3.125V16.875C1.25 17.9102 2.08984 18.75 3.125 18.75H16.875C17.9102 18.75 18.75 17.9102 18.75 16.875V3.125C18.75 2.08984 17.9102 1.25 16.875 1.25ZM14.9648 7.45312C14.9727 7.5625 14.9727 7.67578 14.9727 7.78516C14.9727 11.1719 12.3945 15.0742 7.68359 15.0742C6.23047 15.0742 4.88281 14.6523 3.75 13.9258C3.95703 13.9492 4.15625 13.957 4.36719 13.957C5.56641 13.957 6.66797 13.5508 7.54688 12.8633C6.42188 12.8398 5.47656 12.1016 5.15234 11.0859C5.54688 11.1445 5.90234 11.1445 6.30859 11.0391C5.13672 10.8008 4.25781 9.76953 4.25781 8.52344V8.49219C4.59766 8.68359 4.99609 8.80078 5.41406 8.81641C5.06267 8.58267 4.7746 8.26557 4.57557 7.89342C4.37655 7.52127 4.27275 7.10563 4.27344 6.68359C4.27344 6.20703 4.39844 5.76953 4.62109 5.39062C5.88281 6.94531 7.77734 7.96094 9.90234 8.07031C9.53906 6.33203 10.8398 4.92188 12.4023 4.92188C13.1406 4.92188 13.8047 5.23047 14.2734 5.73047C14.8516 5.62109 15.4062 5.40625 15.8984 5.11328C15.707 5.70703 15.3047 6.20703 14.7734 6.52344C15.2891 6.46875 15.7891 6.32422 16.25 6.125C15.9023 6.63672 15.4648 7.08984 14.9648 7.45312Z"
                  fill="#292830"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 1.25H2.49609C1.80859 1.25 1.25 1.81641 1.25 2.51172V17.4883C1.25 18.1836 1.80859 18.75 2.49609 18.75H17.5C18.1875 18.75 18.75 18.1836 18.75 17.4883V2.51172C18.75 1.81641 18.1875 1.25 17.5 1.25ZM6.53906 16.25H3.94531V7.89844H6.54297V16.25H6.53906ZM5.24219 6.75781C4.41016 6.75781 3.73828 6.08203 3.73828 5.25391C3.73828 4.42578 4.41016 3.75 5.24219 3.75C6.07031 3.75 6.74609 4.42578 6.74609 5.25391C6.74609 6.08594 6.07422 6.75781 5.24219 6.75781ZM16.2617 16.25H13.668V12.1875C13.668 11.2188 13.6484 9.97266 12.3203 9.97266C10.9688 9.97266 10.7617 11.0273 10.7617 12.1172V16.25H8.16797V7.89844H10.6562V9.03906H10.6914C11.0391 8.38281 11.8867 7.69141 13.1484 7.69141C15.7734 7.69141 16.2617 9.42188 16.2617 11.6719V16.25Z"
                  fill="#292830"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
