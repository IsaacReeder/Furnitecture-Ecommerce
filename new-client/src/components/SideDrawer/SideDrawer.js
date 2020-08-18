import React from "react";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  //   let drawerClasses = "side-drawer";
  //   if (props.show) {
  //     drawerClasses = "side-drawer open";
  //   }
  return (
    <nav className="side-drawer open">
      <ul>
        <li>
          <h1>'ello mate</h1>
        </li>
        <li>
          <h1>cheers</h1>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
