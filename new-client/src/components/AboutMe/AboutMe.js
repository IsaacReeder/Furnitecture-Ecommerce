import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="left-am-container">
        <div className="am-title">
          <h1>About Me</h1>
        </div>
        <h2 className="whoami">
          whoami really Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h2>
      </div>
      <div className="right-am-container">
        <div className="button-box"></div>
        <div className="book-box">
          <div className="book-1">
            <a
              href="https://www.isaacreeder.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 className="book-1-title">IsaacReeder.com</h1>
            </a>
          </div>
          <div className="book-2">
            <a
              href="https://www.isaacreeder.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 className="book-2-title">Pictures</h1>
            </a>
          </div>
          <div className="book-3">
            <a
              href="https://github.com/IsaacReeder"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 className="book-3-title">GitHub Repository</h1>
            </a>
          </div>
          <div className="vase"></div>
          <div className="book-4">
            <a
              href="https://www.linkedin.com/in/isaac-reeder/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 className="book-3-title">LinkedIn</h1>
            </a>
          </div>
          {/* <div className="book-5">
            <a
              href="https://www.linkedin.com/in/isaac-reeder/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1 className="book-3-title">LinkedIn</h1>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
