import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutMe from "./components/LandingPage/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductTypes from "./components/Products/Product-types";
import Products from "./components/Products/Products";
import Signup from "./components/Auth/Signup/Signup";
import Signin from "./components/Auth/Signin/Signin";
import Connector from "./components/Checkout/Connector/Connector";
import Modal from "./components/UIElements/Modal";
import Checkout from "./components/Checkout/Checkout";
import { CSSTransition } from "react-transition-group";
import SingleProduct from "./components/Products/SingleProduct";

function App() {
  return (
    <Router>
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/about" exact>
            <AboutMe />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/signin" exact>
            <Signin />
          </Route>
          <Route path="/kind" exact>
            <ProductTypes />
          </Route>
          <Route path="/connector" exact>
            <Connector />
          </Route>
          <Route path="/modal" exact>
            <Modal />
          </Route>
          <Route path="/co" exact>
            <Checkout />
          </Route>
          <Route path="/single-product" exact>
            <SingleProduct />
          </Route>

          <Route component={Products} path="/:brandId" />
        </Switch>
      </CSSTransition>
    </Router>
  );
}

export default App;
