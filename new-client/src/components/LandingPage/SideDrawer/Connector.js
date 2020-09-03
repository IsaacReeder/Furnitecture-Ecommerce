import React, { Component } from "react";
import "./Connector.css";

import Signup from "../../Auth/Signup/Signup";
import Signin from "../../Auth/Signin/Signin";

class Connector extends Component {
  state = {
    signup: true,
    buttonTitle: "Sign in",
  };

  signChange = () => {
    this.setState((prevState) => ({
      signup: !prevState.signup,
    }));
    if (!this.state.signup) {
      this.setState((buttonTitle) => ({
        buttonTitle: "Sign in",
      }));
    } else {
      this.setState((buttonTitle) => ({
        buttonTitle: "Sign up",
      }));
    }
    console.log(this.state.buttonTitle);
  };

  render() {
    return (
      <div>
        <div className="auth-hider">
          <div
            className={
              "movement-container " +
              (this.state.signup === true
                ? "auth-hider-sign-up"
                : this.state.signup === false
                ? "auth-hider-sign-in"
                : "forgot")
            }
          >
            <div className="si">
              <Signin />
            </div>
            <div className="su">
              <Signup />
            </div>
          </div>
          <button className="auth-button" onClick={this.signChange}>
            {this.state.buttonTitle}
          </button>
        </div>
      </div>
    );
  }
}

export default Connector;
