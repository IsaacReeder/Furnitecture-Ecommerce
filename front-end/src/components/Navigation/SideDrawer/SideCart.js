import React from "react";

import "./SideCart.css";
import CartConnector from "../Connector/CartConnector";

const SideDrawer = (props) => {
  let drawerClasses = "side-cart";

  if (props.show) {
    drawerClasses = "side-cart open";
  }
  // if else conditional render signup or in
  return (
    <div className={drawerClasses}>
      <CartConnector />
    </div>
  );
};

export default SideDrawer;
