import React, { Component } from "react";
import SideDrawer from "./SideDrawer/SideDrawer";
import MagicButton from "./SideDrawer/MagicButton";

import "./LandingPage.css";

class NewLanding extends Component {
  state = {
    time: new Date(),
    sideDrawerOpen: false,
    imageSrc: "",
  };
  handleMouseEnter = () => {
    console.log("Mouse enter");
    this.setState({
      imageSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Farticle%2Fh1%2Fpublish-a-book-and-prosper-as-a-small-biz-owner.jpg&f=1&nofb=1",
    });
  };
  handleMouseExit = () => {
    this.setState({
      imageSrc: "",
    });
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date(),
    });
  };
  render() {
    const h = this.state.time.getHours();
    const m = this.state.time.getMinutes();
    const s = this.state.time.getSeconds();
    // imageSrc = this.state.imageSrc;
    return (
      <div className="new-landing-container">
        <header className="navie">
          <nav className="toolbar-navigation">
            <div className="toolbar-logo">
              <h1>Furnitecture</h1>
            </div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
              <ul>
                <li>
                  <h1>
                    {h % 12}:{m < 10 ? "0" + m : m}:{s < 10 ? "0" + s : s}
                    {h < 12 ? "am" : "pm"}
                  </h1>
                </li>
                <li>
                  <h1>Cart</h1>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="left-side">
          <div className="paragraph">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </h3>
          </div>
          <div className="imgg">
            <img src={this.state.imageSrc} alt="pleasant nature"></img>
          </div>
        </div>
        <div className="right-side">
          <MagicButton drawerClickHandler={this.drawerToggleClickHandler} />
          <div
            className="hover-title"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseExit}
          >
            E-commerce application
          </div>
          <div className="drawery">
            <SideDrawer show={this.state.sideDrawerOpen} />
          </div>
        </div>
      </div>
    );
  }
}
export default NewLanding;
