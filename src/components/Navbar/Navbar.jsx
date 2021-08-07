import React from "react";
import { CartCheck as Cart } from "react-bootstrap-icons";

function Navbar(props) {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand">Redwood Guitars</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">Lessons</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Checkout
                <Cart color="#198754" className="ms-1 mb-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
