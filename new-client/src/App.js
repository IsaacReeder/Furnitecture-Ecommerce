import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LandingPage from "./components/landingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
