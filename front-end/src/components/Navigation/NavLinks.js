import React, { Component } from "react";

import CartButton from "./SideDrawer/CartButton";
import SideCart from "./SideDrawer/SideCart";
import Backdrop from "./SideDrawer/Backdrop";

import AuthDrawer from "../LoginPage/SideDrawer/AuthDrawer";

import { Link, withRouter } from "react-router-dom";
import "./NavLinks.css";
import {
  getCart,
  getToken,
  clearToken,
  clearCart,
  calculateQuantity,
} from "../../utils";

class NavLinks extends Component {
  state = {
    items: [],
    brand: "",
    open: false,
    cartItems: getCart(),
  };

  signOut = () => {
    clearToken();
    clearCart();
    this.props.history.push("/");
    // return <Redirect to={"/"} />;
    // Need a better redirect
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  loginDrawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { loginDrawerOpen: !prevState.loginDrawerOpen };
    });
  };
  render() {
    const { cartItems } = this.state;
    const AuthNav = () => {
      return (
        <>
          <ul className="nav-links">
            <li>
              <CartButton
                className="magicButtonLogin"
                drawerClickHandler={this.drawerToggleClickHandler}
              />
            </li>

            <SideCart show={this.state.sideDrawerOpen} />
            <li style={{ marginRight: "20rem" }} onClick={() => this.signOut()}>
              Signout
            </li>
          </ul>
        </>
      );
    };
    const UnAuthNav = () => {
      return (
        <>
          <AuthDrawer show={this.state.loginDrawerOpen} />
          <ul className="nav-links">
            <li>
              <CartButton
                className="magicButtonLogin"
                drawerClickHandler={this.drawerToggleClickHandler}
              />
            </li>

            <li style={{ display: "flex" }}>
              {cartItems.length !== 0 ? (
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    borderRadius: "15px",
                    border: "none",
                    color: "black",
                    backgroundColor: "white",
                    width: "40px",
                  }}
                >
                  <div
                    style={{ justifyContent: "center", alignContent: "center" }}
                  >
                    {calculateQuantity(cartItems)}
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
            <SideCart show={this.state.sideDrawerOpen} />
            <li style={{ marginRight: "50%" }}></li>
          </ul>
        </>
      );
    };
    return (
      <>
        {/* Backdrop 1 */}
        {this.state.sideDrawerOpen && (
          <Backdrop onClick={this.drawerToggleClickHandler} />
        )}
        {/* Backdrop 2 */}
        {this.state.loginDrawerOpen && (
          <Backdrop onClick={this.loginDrawerToggleClickHandler} />
        )}
        {/* Conditional Navlinks */}
        {getToken() != null ? (
          <AuthNav signOut={this.signOut} />
        ) : (
          <UnAuthNav />
        )}
      </>
    );
  }
}

export default withRouter(NavLinks);
