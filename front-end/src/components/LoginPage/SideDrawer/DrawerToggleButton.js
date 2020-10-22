import React from "react";

import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
  <div className="toggle-button" onClick={props.click}>
    LOG IN
  </div>
);

export default DrawerToggleButton;
