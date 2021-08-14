import React, { useEffect, useState } from "react";
import {
  Navbar,
  Showcase,
  Products,
  Cart,
  PaymentForm,
  AddressForm,
  Confirmation,
  Failure,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { commerce } from "./lib/commerce";
import { getInitialData } from "./actions";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { stripePromise } from "./lib/stripe";
import { Elements } from "@stripe/react-stripe-js";

function App(props) {
  const [stripe, setStripe] = useState();

  stripePromise.then((res) => {
    setStripe(res);
    console.log(stripe);
  });
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
        <Route exact path="/payment">
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </Route>
        <Route exact path="/shipping">
          <AddressForm />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/failure">
          <Failure />
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
