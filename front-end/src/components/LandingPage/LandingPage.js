import React from "react";
import { Component } from "react";
import image from "../../images/image.png";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <img
          alt="pleasant yet melancholic"
          src={image}
          style={{ width: "100vw", paddingTop: "10%" }}
        ></img>
      </div>
    );
  }
}
export default LandingPage;
