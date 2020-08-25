import React, { Component } from "react";

import "./NewLanding.css";

class NewLanding extends Component {
  state = { imageSrc: "asdf" };
  handleMouseEnter() {
    this.setState({ imageSrc: "DummySRC" });
  }
  handleMouseExit() {
    this.setState({ imageSrc: "DummySRC2" });
  }
  render() {
    return (
      <div className="new-landing-container">
        <div className="navie">asdf</div>
        <div className="left-side">
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
          <div className="imgg">
            <img src={this.state.imageSrc}></img>
          </div>
        </div>
        <div className="right-side">
          <h1
            className="hover-title"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseExit}
          >
            E-commerce application
          </h1>
        </div>
      </div>
    );
  }
}
export default NewLanding;
