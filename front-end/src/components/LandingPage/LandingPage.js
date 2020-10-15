import React from "react";
import { Component } from "react";

import MagicButton from "../LandingPage/SideDrawer/MagicButton";
import SideDrawer from "./SideDrawer/SideDrawer";

class LandingPage extends Component {
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
          <MagicButton
            className="magicButtonLogin"
            drawerClickHandler={this.drawerToggleClickHandler}
          />
        </p>
        <SideDrawer show={this.state.sideDrawerOpen} />
      </div>
    );
  }
}

export default LandingPage;
