import React, { Component } from "react";
import "./SecondaryContainer.css";
import SideDrawer from "./SideDrawer/SideDrawer";
import SideDrawer2 from "./SideDrawer2/SideDrawer2";
import Backdrop from "./Backdrop/Backdrop";
import MagicButton from "./SideDrawer/MagicButton";
import MagicButton2 from "./SideDrawer/MagicButton";

class SecondaryContainer extends Component {
  state = {
    sideDrawerOpen: false,
    sideDrawerOpen2: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  drawerToggleClickHandler2 = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen2: !prevState.sideDrawerOpen2,
      };
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
        {backdrop}
        <h1 className="title-box">Current projects</h1>
        <MagicButton2 drawerClickHandler={this.drawerToggleClickHandler2} />
        <h1 className="title-box">Members area</h1>
        <div className="drawer-container">
          <SideDrawer show={this.state.sideDrawerOpen} />
        </div>
        <div className="drawer-container">
          <SideDrawer2 show={this.state.sideDrawerOpen2} />
        </div>
      </div>
    );
  }
}

export default SecondaryContainer;
