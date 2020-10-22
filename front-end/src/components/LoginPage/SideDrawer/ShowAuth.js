import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";

const ShowAuth = (props) => {
  return (
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
  );
};

export default ShowAuth;
