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

  render() {
    return (
      <div>
        <div className="auth-hider">
          asdf
          <div
            className={
              "movement-container " +
              (this.state.signup === false
                ? "auth-hider-sign-up"
                : this.state.signup === true
                ? "auth-hider-sign-in"
                : "forgot")
            }
          >
            asdf
            <div className="si">
              <Signin />
              asdf
            </div>
            <div className="su">
              <Signup />
              asdf
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
