import React from "react";
import DrawerToggleButton from "./DrawerToggleButton2";

import "./SideDrawer2.css";

const SideDrawer2 = (props) => {
  let drawerClasses = "side-drawer2";
  if (props.show) {
    drawerClasses = "side-drawer2 open side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <h1>number 2</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers4</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers4</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
        <li>
          <h1>cheers4</h1>
        </li>
      </ul>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </nav>
  );
};

export default SideDrawer2;
