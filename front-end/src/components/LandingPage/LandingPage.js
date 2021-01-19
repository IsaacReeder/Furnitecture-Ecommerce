import React from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "../../utils/index";
import { Component } from "react";
import image from "../../images/computer.png";
import Connector from "../LoginPage/Connector/Connector";

import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return getToken() != null ? (
      <Redirect to={"/kind"} />
    ) : (
      <div
        style={{
          display: "flex",
          maxHeight: "80vh",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "-10%",
        }}
      >
        <div>
          <img
            alt="place holder"
            src={image}
            className="image"
            style={{ width: "40vw" }}
          ></img>
        </div>
        <Connector />
      </div>
    );
  }
}
export default LandingPage;
