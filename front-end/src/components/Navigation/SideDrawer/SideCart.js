import React, { useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import "./SideCart.css";
import CartConnector from "../Connector/CartConnector";

const SideDrawer = (props) => {
  let drawerClasses = "side-cart";

  if (props.show) {
    drawerClasses = "side-cart open";
  }
  const content = (
    <div className={drawerClasses}>
      {props.show && <Backdrop />}
      <CartConnector />
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
