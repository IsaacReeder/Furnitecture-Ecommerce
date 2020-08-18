import React, { useState, Component } from "react";
import "./SecondaryContainer.css";
import SideDrawer from "./SideDrawer/SideDrawer";
import drawerButton from "./SideDrawer/DrawerButton";
import Backdrop from "./Backdrop/Backdrop";
import Projects from "./Projects/Projects";

class SecondaryContainer extends Component {
  //   state = {
  //     sideDrawerOpen: false,
  //   };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  //   backdropClickHandler = () => {
  //     this.setState({
  //       sideDrawerOpen: false,
  //     });
  //   };
  render() {
    return (
      <div classname="titles">
        <h1 className="title-box">Types of products</h1>
        <h1 className="title-box">Current projects</h1>
        <h1 className="title-box">Members area</h1>

        <div className="drawer-container">
          <SideDrawer />
        </div>
        {/* show={this.state.sideDrawerOpen} */}
      </div>
    );
  }
}

export default SecondaryContainer;
