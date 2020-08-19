import React, { useState, Component } from "react";
import "./SecondaryContainer.css";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import MagicButton from "./SideDrawer/MagicButton";

class SecondaryContainer extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div classname="titles">
        <h1 className="title-box">Types of products</h1>
        <MagicButton drawerClickHandler={this.drawerToggleClickHandler} />
        <h1 className="title-box">Current projects</h1>
        <h1 className="title-box">Members area</h1>
        <div className="drawer-container">
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
      </div>
    );
  }
}

export default SecondaryContainer;
