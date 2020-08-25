import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage/landingPage";
import AboutMe from "./components/LandingPage/AboutMe/AboutMe";
import NewLanding from "./components/LandingPage/NewLanding";

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
        <Route path="/new" exact>
          <NewLanding />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
