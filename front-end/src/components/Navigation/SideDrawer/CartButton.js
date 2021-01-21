import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";

const MagicButton = (props) => {
  return (
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
  );
};

export default MagicButton;
