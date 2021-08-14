import React from "react";
import { Link } from "react-router-dom";

const AddressForm = () => {
  return (
    <section id="address-form" className="py-5">
      <div className="container">
        <form className="address-form p-5 bg-light ">
          <div className="mb-2">
            <h3>Contact Information</h3>
            <input
              type="email"
              placeholder="Email"
              className="border-1 border-secondary email-input w-full"
            />
          </div>
          <div>
            <h3>Shipping Address</h3>
            <div className="d-flex justify-content-between">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border-1 border-secondary  w-half"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border-1 border-secondary  w-half"
              />
            </div>
            <input
              type="text"
              name="street"
              placeholder="Address"
              className="border-1 border-secondary w-full"
            />
            <input
              type="text"
              name="town_city"
              placeholder="City / Town"
              className="border-1 border-secondary w-full"
            />
            <div className="d-flex justify-content-between">
              <select
                name="country"
                className="border-1 w-third border-secondary "
              >
                <option class="select-placeholder">Country</option>
                <option>United States</option>
              </select>
              <select
                name="state"
                className="border-1 w-third border-secondary  "
              >
                <option>State</option>
                <option>New Jersey</option>
                <option>New York</option>
                <option>Pennsylvania</option>
              </select>
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                className="border-1 w-third border-secondary "
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border-1 w-full border-secondary "
            />
            <div className="d-flex justify-content-between ">
              <Link to="/cart">
                <button className="btn btn-danger">Return to cart</button>
              </Link>
              <Link to="/payment">
                <button className="btn btn-primary">Continue to Payment</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddressForm;
