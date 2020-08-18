import React from "react";
import drawerToggleButton from "./DrawerToggleButton";

const MagicButton = (props) => {
  return (
    <div>
      <drawerToggleButton click={props.drawerClickHandler} />
    </div>
  );
};

export default MagicButton;
