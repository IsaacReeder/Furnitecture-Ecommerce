import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { getToken } from "./utils";

import MainNavigation from "./components/Navigation/MainNavigation";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductTypes from "../src/components/Products/ProductTypes";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/LoginPage/LoginPage";
import { Component } from "react";
import Wishlist from "./components/Wishlist/Wishlist";

class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          getToken() !== null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
    return (
      <div className="App">
        <MainNavigation />
        <Router>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <Switch>
              <Route path="/" exact>
                <LandingPage />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/kind" exact>
                <ProductTypes />
              </Route>
              <Route path="/checkout" exact>
                <Checkout />
              </Route>
              <PrivateRoute component={Wishlist} exact path="/wishlist" />

              <Route component={Products} path="/:brandId" />
            </Switch>
          </CSSTransition>
        </Router>
      </div>
    );
  }
}

export default App;
