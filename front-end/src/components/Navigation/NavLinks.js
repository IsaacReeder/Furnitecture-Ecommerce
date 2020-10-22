import React, { Component } from "react";
// import Modal from "../UIElements/Modal";
// import { getCart } from "../../utils/index";
// import { AuthContext } from '../../context/auth-context';
import CartButton from "./SideDrawer/CartButton";
import SideCart from "./SideDrawer/SideCart";

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
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    return (
      <ul className="nav-links">
        <li>
          <i className="fas fa-heart-o">asdf</i>
        </li>
        <li style={{ color: "white" }}>account</li>
        <li>
          <CartButton
            className="magicButtonLogin"
            drawerClickHandler={this.drawerToggleClickHandler}
          />
        </li>
        <SideCart show={this.state.sideDrawerOpen} />
        <li style={{ marginRight: "50%" }}></li>
      </ul>
    );
  }
}

export default NavLinks;
