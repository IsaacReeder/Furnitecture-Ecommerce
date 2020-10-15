import React from "react";
import { Component } from "react";

import MagicButton from "../LandingPage/SideDrawer/MagicButton";
import SideDrawer from "./SideDrawer/SideDrawer";

class LandingPage extends Component {
  state = {
    sideDrawerOpen: false,
  };
  handleMouseEnter = () => {
    console.log("Mouse enter");
    this.setState({
      coler: "white",
    });
  };
  handleMouseExit = () => {
    this.setState({
      color: "hsl(14, 84%, 57%)",
    });
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    return (
      <div
        style={{
          fontSize: "20rem",
          color: "hsl(14, 84%, 57%)",
          display: "flex",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <p style={{ marginLeft: "10%" }}>
          <MagicButton
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseExit}
            drawerClickHandler={this.drawerToggleClickHandler}
          />
        </p>
        <SideDrawer show={this.state.sideDrawerOpen} />
      </div>
    );
  }
}

export default LandingPage;
