import React, { useEffect } from "react";
import { Navbar, Showcase, Products, Cart } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { getInitialData } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getInitialData();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <Showcase /> */}
      {/* <Products /> */}
      <Cart />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { getInitialData })(App);
