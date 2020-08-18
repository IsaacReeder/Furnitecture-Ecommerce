import React, { useState } from "react";
import "./SecondaryContainer.css";
import SideDrawer from "./SideDrawer";

const SecondaryContainer = () => {
  const [sideDrawerOpen, setSideDrawer] = useState(false);
  return (
    <div classname="titles">
      <h1 className="title-box">Types of products</h1>
      <h1 className="title-box">Current projects</h1>
      <h1 className="title-box">Members area</h1>
      <SideDrawer
        click={this.backdropClickHandler}
        show={this.state.sideDrawerOpen}
      />
    </div>
  );
};

drawerToggleClickHandler = () => {
  this.setSideDrawer((prevState) => {
    return { sideDrawerOpen: !prevState.setSideDrawer };
  });
};

backdropClickHandler = () => {
  this.setState({
    sideDrawerOpen: false,
  });
};
export default SecondaryContainer;
