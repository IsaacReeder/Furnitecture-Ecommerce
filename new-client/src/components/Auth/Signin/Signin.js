import React from "react";

import { setToken } from "../../../utils/index";
import "./Signin.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Signin extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    toast: false,
    toastMessage: "",
    loading: false,
  };

  handleChange = (event) => {
    console.log(event.target.name);
    event.persist();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    // Sign up user
    try {
      this.setState({ loading: true });
      const response = await strapi.login(username, password);
      this.setState({ loading: false });
      setToken(response.jwt);
      this.redirectUser("/");
      console.log("loggedin");
    } catch (err) {
      this.setState({ loading: false });
      this.showToast(err.message);
    }
  };

  redirectUser = (path) => this.props.history.push(path);

  isFormEmpty = ({ username, password }) => {
    return !username || !password;
  };

  showToast = (toastMessage) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toastMessage, toast, loading } = this.state;

    return (
      <div>
        <h1>Welcome back!</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label htmlFor="uname">Username:</label>
          <br></br>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label htmlFor="pword">Password</label>
          <br></br>
          <input
            onChange={this.handleChange}
            id="password"
            name="password"
            type="password"
            label="password"
            placeholder="password"
            value={this.state.password}
          />
          <br></br>
          <button text="Submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
