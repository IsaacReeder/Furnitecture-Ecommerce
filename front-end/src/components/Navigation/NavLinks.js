import React, { Component } from "react";
// import Modal from "../UIElements/Modal";
// import { getCart } from "../../utils/index";
// import { AuthContext } from '../../context/auth-context';

import "./NavLinks.css";

class NavLinks extends Component {
  state = {
    items: [],
    brand: "",
    // cartItems: getCart(),
    showModal: false,
    open: false,
  };

  modalAction = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
    console.log(this.state.showModal);
    console.log(this.state.cartItems);
  };

  render() {
    return (
      <ul className="nav-links">
        <li style={{ color: "white" }}>search</li>
        <li style={{ color: "white" }}>cart</li>

        <li style={{ marginRight: "50%" }}></li>
      </ul>
    );
  }
}

export default NavLinks;
