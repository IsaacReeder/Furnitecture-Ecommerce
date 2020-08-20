import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="left-am-container">
        <div className="am-title"></div>
        <div className="whoami"></div>
      </div>
      <div className="right-am-container">
        <div className="button-box"></div>
        <div className="book-box">
          <div className="book-1"></div>
          <div className="book-2"></div>
          <div className="book-3"></div>
          <div className="hover-vase"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
