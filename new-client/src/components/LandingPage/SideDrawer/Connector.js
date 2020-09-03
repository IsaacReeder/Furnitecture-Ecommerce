import React, { Component } from "react";
import "./Connector.css";

import Signup from "../../Auth/Signup/Signup";
import Signin from "../../Auth/Signin/Signin";

class Connector extends Component {
  state = {
    signup: true,
  };

  signChanger = () => {
    this.setState((prevState) => ({
      signup: !prevState.signup,
    }));
    console.log(this.state.signup);
  };

  render() {
    return (
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
          <div className="su" show={this.state.signup}>
            <Signup />
          </div>
          <div className="si" show={!this.state.signup}>
            <Signin />
          </div>
          <button onClick={this.signChanger}></button>
        </div>
      </div>
    );
  }
}

export default Connector;
