import React, { Component } from "react";
import Modal from "../UIElements/modal";
import { getCart } from "../../utils/index";
// import { AuthContext } from '../../context/auth-context';
import "./NavLinks.css";

class NavLinks extends Component {
  state = {
    items: [],
    brand: "",
    cartItems: getCart(),
    showModal: false,
  };
  modalAction = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
    console.log(this.state.showModal);
  };
  render() {
    const button_styles = {
      position: "relative",
      zIndex: 1,
    };
    return (
      <ul className="nav-links">
        {this.state.cartItems.length > 0 && (
          <li>
            <div style={button_styles}>
              <div
                onClick={this.modalAction}
                style={{
                  fontSize: "2em",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-shopping-cart" />
              </div>
              <Modal
                open={this.state.showModal}
                onClose={this.modalAction}
              ></Modal>
            </div>
          </li>
        )}
        <li>asdf</li>
        <li>asdf</li>
        <li>asdf</li>
      </ul>
    );
  }
}

export default NavLinks;
