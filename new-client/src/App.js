import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutMe from "./components/LandingPage/AboutMe/AboutMe";
import LandingPage from "./components/LandingPage/LandingPage";
import Signup from "./components/Auth/Signup-in";
import ProductTypes from "./components/Products/product-types";

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
        <Route path="/kind" exact>
          <ProductTypes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
