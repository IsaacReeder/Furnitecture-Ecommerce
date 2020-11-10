import React, { Component } from "react";
// import Modal from "../UIElements/Modal";
// import { getCart } from "../../utils/index";
// import { AuthContext } from '../../context/auth-context';
import CartButton from "./SideDrawer/CartButton";
import SideCart from "./SideDrawer/SideCart";
import Backdrop from "./SideDrawer/Backdrop";

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
    showModal: false,
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
  render() {
    const { cartItems } = this.state;
    const AuthNav = () => {
      return (
        <ul className="nav-links">
          <li>
            <Link to="/wishlist" style={{}}>
              <i style={{ fontSize: "1.5em" }} className="fas fa-heart"></i>
            </Link>
          </li>
          <li style={{ color: "white" }}>account</li>
          <li>
            <CartButton
              className="magicButtonLogin"
              drawerClickHandler={this.drawerToggleClickHandler}
            />
          </li>
          <li>
            {cartItems.length !== 0 ? (
              <div
                style={{ borderRadius: "15px", border: "none", color: "white" }}
              >
                {cartItems.length}
              </div>
            ) : (
              ""
            )}
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
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
          <li>
            <CartButton
              className="magicButtonLogin"
              drawerClickHandler={this.drawerToggleClickHandler}
            />
          </li>
          {/* WORKING HERE, RENDER CART ITEM QUANTITY PROPER POSITIONING   */}
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

export default withRouter(NavLinks);
