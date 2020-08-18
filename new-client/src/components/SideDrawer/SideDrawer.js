import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <h1>'ello mate</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
      </ul>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </nav>
  );
};

export default sideDrawer;
