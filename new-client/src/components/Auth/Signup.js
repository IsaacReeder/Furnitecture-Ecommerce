import React, { Component } from "react";

import Form from "../Form/Form";

class Signup extends Component {
  render() {
    const [option, setOption] = React.useState(1);

    return (
      <div className="container">
        <header>
          <div
            className={
              "header-headings " +
              (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
            }
          >
            <span>Sign in to your account</span>
            <span>Create an account</span>
            <span>Reset your password</span>
          </div>
        </header>
        <ul className="options">
          <li
            className={option === 1 ? "active" : ""}
            onClick={() => setOption(1)}
          >
            Sign in
          </li>
          <li
            className={option === 2 ? "active" : ""}
            onClick={() => setOption(2)}
          >
            Sign up
          </li>
          <li
            className={option === 3 ? "active" : ""}
            onClick={() => setOption(3)}
          >
            Forgot
          </li>
        </ul>
        <Form option={option} />
        <footer>
          <a
            href="https://dribbble.com/shots/5041581-Zenbu-Sign-in-up-forgot-page"
            target="_blank"
          >
            Original design with animations by Zenbu
          </a>
        </footer>
      </div>
    );
  }
}

export default Signup;
