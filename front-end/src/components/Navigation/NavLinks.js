import React, { Component } from "react";
// import Modal from "../UIElements/Modal";
// import { getCart } from "../../utils/index";
// import { AuthContext } from '../../context/auth-context';
import CartButton from "./SideDrawer/CartButton";
import SideCart from "./SideDrawer/SideCart";
import Backdrop from "./SideDrawer/Backdrop";

import { Link, BrowserRouter } from "react-router-dom";
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
      <>
        {this.state.sideDrawerOpen && (
          <Backdrop onClick={this.drawerToggleClickHandler} />
        )}
        <ul className="nav-links">
          <li>
            <BrowserRouter>
              <Link to="/wishlist" style={{}}>
                <i style={{ fontSize: "1.5em" }} className="fas fa-heart"></i>
              </Link>
            </BrowserRouter>
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
      </>
    );
  }
}

export default NavLinks;
