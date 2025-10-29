import React from "react";

function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title">Choose your flexible plan.</h2>

        <div className="plans-grid">
          <div className="plan-card">
            <div className="plan-icon icon-starter">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6H17V4C17 2.89 16.11 2 15 2H9C7.89 2 7 2.89 7 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM9 4H15V6H9V4ZM20 19H4V17H20V19ZM20 14H4V8H7V10H9V8H15V10H17V8H20V14Z"
                  fill="#3EC1F3"
                />
              </svg>
            </div>
            <h3 className="plan-title">Starter Plan</h3>
            <ul className="plan-features">
              <li>
                <span className="checkmark">✓</span> Store unlimited data
              </li>
              <li>
                <span className="checkmark">✓</span> Export to pdf, xls, csv
              </li>
              <li>
                <span className="checkmark">✓</span> Cloud server support
              </li>
            </ul>
            <div className="plan-price">
              $9.99<span className="price-unit">/year</span>
            </div>
            <div className="plan-users">up to 3 user + $99 per user</div>
            <a href="#" className="get-button">
              Get this
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"
                  fill="#FF7235"
                />
              </svg>
            </a>
          </div>
          <div className="plan-card">
            <div className="plan-icon icon-silver">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"
                  fill="#FF7235"
                />
              </svg>
            </div>
            <h3 className="plan-title">Silver Plan</h3>
            <ul className="plan-features">
              <li>
                <span className="checkmark">✓</span> Store unlimited data
              </li>
              <li>
                <span className="checkmark">✓</span> Export to pdf, xls, csv
              </li>
              <li>
                <span className="checkmark">✓</span> Cloud server support
              </li>
            </ul>
            <div className="plan-price">
              $19.99<span className="price-unit">/year</span>
            </div>
            <div className="plan-users">up to 3 user + $99 per user</div>
            <a href="#" className="get-button">
              Get this
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"
                  fill="#FF7235"
                />
              </svg>
            </a>
          </div>
          <div className="plan-card">
            <div className="plan-icon icon-diamond">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2H4C2.89 2 2 2.89 2 4V15C2 16.11 2.89 17 4 17H8V22L12 20L16 22V17H20C21.11 17 22 16.11 22 15V4C22 2.89 21.11 2 20 2ZM20 15H4V13H20V15ZM20 10H4V5C4 4.45 4.45 4 5 4H19C19.55 4 20 4.45 20 5V10Z"
                  fill="#4D12EE"
                />
              </svg>
            </div>
            <h3 className="plan-title">Diamond Plan</h3>
            <ul className="plan-features">
              <li>
                <span className="checkmark">✓</span> Store unlimited data
              </li>
              <li>
                <span className="checkmark">✓</span> Export to pdf, xls, csv
              </li>
              <li>
                <span className="checkmark">✓</span> Cloud server support
              </li>
            </ul>
            <div className="plan-price">
              $29.99<span className="price-unit">/year</span>
            </div>
            <div className="plan-users">up to 3 user + $99 per user</div>
            <a href="#" className="get-button">
              Get this
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"
                  fill="#FF7235"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
