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
          <div className="book-1"></div>
          <div className="book-2"></div>
          <div className="book-3"></div>
          <div className="vase"></div>
          <div className="book-2"></div>
          <div className="book-2"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
