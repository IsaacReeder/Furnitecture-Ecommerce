import React, { Component } from "react";
import Modal from "../UIElements/modal";
import { getCart } from "../../utils/index";
// import { AuthContext } from '../../context/auth-context';
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import "./NavLinks.css";

class NavLinks extends Component {
  state = {
    items: [],
    brand: "",
    cartItems: getCart(),
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
    const StyledBadge = withStyles((theme) => ({
      badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
      },
    }))(Badge);
    const button_styles = {
      position: "relative",
      zIndex: 1,
    };

    return (
      <ul className="nav-links">
        <li style={{ color: "white" }}>asdf</li>
        <li style={{ color: "white" }}>Search</li>

        <li style={{ marginRight: "50%" }}>
          {/* {this.state.cartItems.map((item) => ({ item.id }))} */}
          <StyledBadge badgeContent={3} color="secondary">
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
          </StyledBadge>
          <li></li>
        </li>
        {/* {this.state.cartItems.length > 0 && ( */}
        {/* )} */}
      </ul>
    );
  }
}

export default NavLinks;
