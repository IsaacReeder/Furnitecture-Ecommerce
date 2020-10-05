import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container-footer"></div>
      <footer>
        {/* <!-- Footer main --> */}
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
              <li>
                <a href="#asdf">Services</a>
              </li>
              <li>
                <a href="#asdf">Portfolio</a>
              </li>
              <li>
                <a href="#asdf">Pricing</a>
              </li>
              <li>
                <a href="#asdf">Customers</a>
              </li>
              <li>
                <a href="#asdf">Collaborate</a>
              </li>
            </ul>
          </div>

          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="#asdf">Help</a>
              </li>
              <li>
                <a href="#asdf">Sales</a>
              </li>
              <li>
                <a href="#asdf">Advertise</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>
              Subscribe to our mailing list and receive notifications when new
              products arrive
            </p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>

        {/* <!-- Footer social --> */}
        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <a href="#asdf">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#asdf">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#asdf">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#asdf">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#asdf">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#asdf">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </section>

        {/* <!-- Footer legal --> */}
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <a href="#asdf">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#asdf">Privacy Policy</a>
            </li>
            <li>&copy; 2020 Copyright Isaac Reeder</li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
