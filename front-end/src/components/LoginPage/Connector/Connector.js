import React, { Component } from "react";
import "./Connector.css";

import Signup from "../../Auth/Signup/Signup";
import Signin from "../../Auth/Signin/Signin";

class Connector extends Component {
  state = {
    signup: true,
    buttonTitle: "Sign up",
  };

  signChange = () => {
    this.setState((prevState) => ({
      signup: !prevState.signup,
    }));
    if (!this.state.signup) {
      this.setState(() => ({
        buttonTitle: "Sign up",
      }));
    } else {
      this.setState(() => ({
        buttonTitle: "Sign in",
      }));
    }
    console.log(this.state.buttonTitle);
  };
  // +
  // (this.state.signup === false
  //   ? "authy-hider-sign-up"
  //   : this.state.signup === true
  //   ? "authy-hider-sign-in"
  //   : "forgot")
  // Above chunk goes in after {"authy-container "} below
  render() {
    return (
      <div>
        <div className="authy-hider">
          <div className="authy-container ">
            <div className="sin">
              <Signin />
              <h5 style={{ fontSize: " 2vw" }}>Sign-in</h5>
            </div>
            <div className="sup">
              <Signup />
              <h5 style={{ fontSize: " 2vw" }}>Sign-up</h5>
            </div>
          </div>
          <button className="authy-button" onClick={this.signChange}>
            {this.state.buttonTitle}
          </button>
        </div>
      </div>
    );
  }
}

export default Connector;
