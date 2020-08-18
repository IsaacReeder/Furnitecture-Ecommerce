import React from "react";
import Blurb from "./Blurb";
import ImagePresenter from "./ImagePresenter";
import SecondaryContainer from "./SecondaryContainer";

const LandingContainer = () => {
  return (
    <div>
      <Blurb />
      <ImagePresenter />
      <SecondaryContainer />
    </div>
  );
};

export default LandingContainer;
