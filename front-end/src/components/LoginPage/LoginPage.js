import React from "react";
import { Component } from "react";

import ShowAuth from "./SideDrawer/ShowAuth";
import AuthDrawer from "./SideDrawer/AuthDrawer";

class LoginPage extends Component {
  state = {
    sideDrawerOpen: false,
    isHovered: false,
  };

  handleMouseEnter = () => {
    console.log("Mouse enter");
    this.setState({
      isHovered: true,
    });
  };
  handleMouseExit = () => {
    this.setState({
      isHovered: false,
    });
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    return (
      <>
        <AuthDrawer show={this.state.sideDrawerOpen} />
        <div
          style={{
            fontSize: "20rem",
            color: "hsl(14, 84%, 57%)",
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>
            <ShowAuth
              className="magicButtonLogin"
              drawerClickHandler={this.drawerToggleClickHandler}
            />
          </p>
        </div>
      </>
    );
  }
}

export default LoginPage;
