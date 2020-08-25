import React from "react";

import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <h1>Furnitecture</h1>
  </button>
);

export default DrawerToggleButton;
