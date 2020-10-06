import React, { Component } from "react";
import Modal from "../UIElements/modal";
import { getCart } from "../../utils/index";
import Strapi from "strapi-sdk-javascript/build/main";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class CartIconModal extends Component {
  state = {
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
      <div>
        {this.state.cartItems ? (
          <div style={button_styles}>
            <div
              onClick={this.modalAction}
              style={{
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
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CartIconModal;
