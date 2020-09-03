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
        <div className={'movement-container ' + (signup === true ? 'auth-hider-sign-up' : (signup === false ? 'auth-hider-sign-in'))}>
         <div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }></div>
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
