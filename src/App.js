import React, { useEffect } from "react";
import { Navbar, Showcase, Products, Cart } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { commerce } from "./lib/commerce";
import { getInitialData } from "./actions";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.getInitialData();
  }, []);

  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Showcase />

          <Products />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { getInitialData })(App);
