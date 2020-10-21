import React from "react";

import "./SideCart.css";
import CartConnector from "../Connector/CartConnector";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  // if else conditional render signup or in
  return (
    <div className={drawerClasses}>
      <CartConnector />
      Hi
    </div>
  );
};

export default SideDrawer;
