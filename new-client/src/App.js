import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/landingPage";
import AboutMe from "./components/AboutMe/AboutMe";

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
      </Switch>
    </Router>
  );
}

export default App;
