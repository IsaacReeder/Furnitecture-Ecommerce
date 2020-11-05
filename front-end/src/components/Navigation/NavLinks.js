import React, { Component } from "react";
// import Modal from "../UIElements/Modal";
// import { getCart } from "../../utils/index";
// import { AuthContext } from '../../context/auth-context';
import CartButton from "./SideDrawer/CartButton";
import SideCart from "./SideDrawer/SideCart";
import Backdrop from "./SideDrawer/Backdrop";

import { Link, BrowserRouter, Redirect } from "react-router-dom";
import "./NavLinks.css";
import { getToken, clearToken, clearCart } from "../../utils";

class NavLinks extends Component {
  state = {
    items: [],
    brand: "",
    // cartItems: getCart(),
    showModal: false,
    open: false,
  };

  signOut = () => {
    clearToken();
    clearCart();
    return <Redirect to={"/"} />;
    // Need a better redirect
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    const AuthNav = () => {
      return (
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
          <li style={{ marginRight: "50%" }} onClick={() => this.signOut()}>
            Signout
          </li>
        </ul>
      );
    };
    const UnAuthNav = () => {
      return (
        <ul className="nav-links">
          <li>Login</li>
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
    };
    return (
      <>
        {/* Backdrop */}
        {this.state.sideDrawerOpen && (
          <Backdrop onClick={this.drawerToggleClickHandler} />
        )}
        {/* Navlinks */}
        {getToken() != null ? (
          <AuthNav signOut={this.signOut} />
        ) : (
          <UnAuthNav />
        )}
      </>
    );
  }
}

export default NavLinks;
