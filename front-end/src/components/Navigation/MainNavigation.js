import React from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
// import { getToken } from "../../utils/index";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <MainHeader>
        <h1 className="main-navigation__title">Furnitecture</h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
