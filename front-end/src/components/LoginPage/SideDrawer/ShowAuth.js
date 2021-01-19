import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";

const ShowAuth = (props) => {
  return (
    <div>
      <DrawerToggleButton click={props.loginDrawerClickHandler} />
    </div>
  );
};

export default ShowAuth;
