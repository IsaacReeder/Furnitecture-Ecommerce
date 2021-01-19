import React from "react";

import { setToken } from "../../../utils/index";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import Strapi from "strapi-sdk-javascript/build/main";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Signup extends React.Component {
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

    const { username, email, password } = this.state;

    if (this.isFormEmpty(this.state)) {
      toast.warning("Fill in all fields", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        color: "white",
      });
      return;
    }
    this.setState({ state: this.state });

    // Sign up user
    try {
      this.setState({ loading: true });
      const response = await strapi.register(username, email, password);
      this.setState({ loading: false });
      setToken(response.jwt);
      toast.success("Thanks! Please sign in.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        color: "white",
      });
    } catch (err) {
      this.setState({ loading: false });
      console.table(err.message);
      toast.error("🦄 Please try again", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        color: "white",
      });
    }
  };

  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };

  showToast = (toastMessage) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <br></br>
          <input
            className="auth-inputs"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          ></input>
          <br></br>
          {/* <label htmlFor="lname">Email</label> */}
          <br></br>
          <input
            className="auth-inputs"
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <br></br>
          <input
            className="auth-inputs"
            onChange={this.handleChange}
            id="password"
            name="password"
            type="password"
            label="password"
            placeholder="password"
            value={this.state.password}
          />
          <br></br>
          <button text="Submit" type="submit" disabled={loading}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
