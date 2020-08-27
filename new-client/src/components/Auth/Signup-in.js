import React, { Component } from "react";
import "./Signup-in.css";
import Form from "./Form/Form";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "",
    };
  }
  // setOption(num) {
  //   this.setState((option) => {
  //     option = num;
  //     console.log(`Set the option to ${option}`);
  //   });
  // }
  render() {
    // const [option, setOption] = React.useState(1);
    const option = this.state.option;
    console.log(option);
    return (
      <div className="container">
        <header>
          <div
            className={
              "header-headings " +
              (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "")
            }
          >
            <span>Sign in to your account</span>
            <span>Create an account</span>
            {/* <span>Reset your password</span> */}
          </div>
        </header>
        <ul className="options">
          <li
            className={option === 1 ? "active" : ""}
            onClick={() => this.setState({ option: 1 })}
          >
            Sign in
          </li>
          <li
            className={option === 2 ? "active" : ""}
            onClick={() => this.setState({ option: 2 })}
          >
            Sign up
          </li>
          {/* <li
            className={option === 3 ? "active" : ""}
            onClick={() => this.setState({ option: 3 })}
          >
            Forgot
          </li> */}
        </ul>
        <Form option={this.state.option} />
      </div>
    );
  }
}

export default Signup;
