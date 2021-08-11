import React from "react";
import { CartCheck as Cart } from "react-bootstrap-icons";

function BadgeLg(props) {
  const { cartSize } = props;
  return (
    <div className="badge-container-lg">
      <p className="badge-number">{cartSize}</p>
    </div>
  );
}

function BadgeSm(props) {
  const { cartSize } = props;

  return (
    <div className="badge-container-sm">
      <p className="badge-number">{cartSize}</p>
    </div>
  );
}

function Navbar(props) {
  const { cartSize } = props;
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-sm fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          Redwood Guitars
        </a>

        <button
          className="navbar-toggler border-0 "
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
          <BadgeSm cartSize={cartSize} />
        </button>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">Lessons</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About Us</a>
            </li>
            <li className="nav-item cart-nav-item">
              <a className="nav-link d-flex align-items-center">
                Checkout
                <Cart color="#198754" className="ms-1 mb-0 " />
              </a>
              <BadgeLg cartSize={cartSize} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
