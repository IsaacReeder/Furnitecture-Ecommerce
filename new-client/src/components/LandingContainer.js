import React from "react";
import "./LandingContainer.css";

import Blurb from "./Blurb";
import ImagePresenter from "./ImagePresenter";
import SecondaryContainer from "./SecondaryContainer";

const LandingContainer = () => {
  return (
    <div className="Landing-Container">
      <div className="left-side-container">
        <div className="blurb">
          <Blurb />
        </div>

        <ImagePresenter />
      </div>
      <div className="right-side-container">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default LandingContainer;
