import React from "react";

import "./AuthDrawer.css";
import Connector from "../Connector/Connector";

const AuthDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  // if else conditional render signup or in
  return (
    <div className={drawerClasses}>
      <Connector />
    </div>
  );
};

export default AuthDrawer;
