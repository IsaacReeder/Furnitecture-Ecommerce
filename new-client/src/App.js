import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutMe from "./components/LandingPage/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductTypes from "./components/Products/product-types";
import Products from "./components/Products/products";
import Signup from "./components/Auth/Signup/Signup";
import Signin from "./components/Auth/Signin/Signin";
import Connector from "./components/Connector/Connector";

function App() {
  return (
    <Router>
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
        <Route component={Products} path="/:brandId" />
        {/* <Route path="/products" exact>
          <Products />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
