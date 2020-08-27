import React, { Component } from "react";
import { setToken } from "../../../utils/index";
import Strapi from "strapi-sdk-javascript/build/main";
import "./Form.css";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: props.option,
      username: "",
      email: "",
      password: "",
      toast: false,
      toastMessage: "",
      loading: false,
    };
    console.log("within the constructor: " + this.state.option);
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event, this.state);
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
    // const { toastMessage, toast, loading } = this.state;
    // const [option, setOption] = React.useState(1);
    const option = this.state.option;
    console.log(option);
    return (
      <form className="account-form" onSubmit={this.handleSubmit}>
        <div
          className={
            "account-form-fields " +
            (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
          }
        >
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={this.handleChange}
            required
            // required={option === 1 || option === 2 ? true : false}
            // disabled={option === 3 ? true : false}
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
            // required={option === 2 ? true : false}
            // disabled={option === 1 || option === 3 ? true : false}
          />
        </div>
        <button className="btn-submit-form" type="submit">
          {option === 1 ? "Sign in" : option === 2 ? "Sign up" : ""}
        </button>
      </form>
    );
  }
}

export default Form;
