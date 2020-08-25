import React, { Component } from "react";
import SideDrawer from "./SideDrawer/SideDrawer";
import MagicButton from "./SideDrawer/MagicButton";

import "./NewLanding.css";

class NewLanding extends Component {
  state = {
    sideDrawerOpen: false,
    imageSrc:
      "https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg",
  };
  handleMouseEnter = () => {
    console.log("Mouse enter");
    this.setState({
      imageSrc:
        "https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg",
    });
  };
  handleMouseExit = () => {
    this.setState({
      imageSrc:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/beach_safety_covid_19_other/1800x1200_beach_safety_covid_19_other.jpg",
    });
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    // imageSrc = this.state.imageSrc;
    return (
      <div className="new-landing-container">
        <div className="navie">asdf</div>
        <div className="left-side">
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
          <div className="imgg">
            <img src={this.state.imageSrc} alt="pleasant nature"></img>
          </div>
        </div>
        <div className="right-side">
          <MagicButton drawerClickHandler={this.drawerToggleClickHandler} />
          <h1
            className="hover-title"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseExit}
          >
            E-commerce application
          </h1>
          <div className="drawery">
            <SideDrawer show={this.state.sideDrawerOpen} />
          </div>
        </div>
      </div>
    );
  }
}
export default NewLanding;
