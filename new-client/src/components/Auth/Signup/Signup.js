import React from "react";

import { setToken } from "../../../utils/index";
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
  // function handleChange(e) {

  //   e.persist();
  //   let change = {};
  //   change[e.target.name] = e.target.value;
  //   this.setState(change);
  //   this.setState({ [e.target.name]: value });
  // }
  handleChange = (event) => {
    console.log(event.target.name);
    event.persist();
    // this.setState({ [event.target.name]: value });
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
      this.showToast("Fill in all fields");
      return;
    }

    // Sign up user
    try {
      this.setState({ loading: true });
      const response = await strapi.register(username, email, password);
      this.setState({ loading: false });
      setToken(response.jwt);
      this.redirectUser("/");
    } catch (err) {
      this.setState({ loading: false });
      this.showToast(err.message);
    }
  };

  redirectUser = (path) => this.props.history.push(path);

  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };

  showToast = (toastMessage) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toastMessage, toast, loading } = this.state;

    return (
      <div>
        <h1>Signup</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fname">Username:</label>
          <br></br>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            // onChange={handleChange}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label htmlFor="lname">Email</label>
          <br></br>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label htmlFor="lname">Password</label>
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
        {/* onSubmit={this.handleSubmit} */}
        {/* onChange={this.handleChange} */}
        {/* onChange={this.handleChange} */}
        {/* onChange={this.handleChange} */}
      </div>
    );
  }
}

export default Signup;
