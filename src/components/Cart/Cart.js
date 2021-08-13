import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
import { commerce } from "../../lib/commerce.js";
import { createCheckoutToken } from "../../actions";

function Cart(props) {
  const handleCheckout = () => {
    props.createCheckoutToken(props.cart.id);
  };

  const handleCapture = () => {
    console.log(props.checkoutToken.id);

    commerce.checkout.capture(props.checkoutToken.id, {
      line_items: {
        item_7RyWOwmK5nEa2V: {
          quantity: 1,
        },
      },
      customer: {
        firstname: "John",
        lastname: "Doe",
        email: "mkotik97@gmail.com",
      },
      shipping: {
        name: "John Doe",
        street: "123 Fake St",
        town_city: "San Francisco",
        county_state: "US-CA",
        postal_zip_code: "94103",
        country: "US",
      },
      fulfillment: {
        shipping_method: "ship_O3bR5X98Mlnzdj",
      },
      billing: {
        name: "John Doe",
        street: "234 Fake St",
        town_city: "San Francisco",
        county_state: "US-CA",
        postal_zip_code: "94103",
        country: "US",
      },
      payment: {
        gateway: "stripe",
        card: {
          token: "irh98298g49",
        },
      },
      pay_what_you_want: "149.99",
    });
  };
  return (
    <section className="section-cart p-sm-5 p-2">
      {props.cart.line_items && (
        <div className="container">
          <h1 className="mb-4 text-lg-start text-center">Shopping Cart</h1>
          <div className="row items-header text-start mb-2 d-none d-lg-flex">
            <div className="col-5 ">Product</div>
            <div className="col ">Price</div>
            <div className="col ">Quantity</div>
            <div className="col ">Total</div>
          </div>
          <div>
            {props.cart.line_items.map((item, i) => {
              return (
                <CartItem
                  image={item.media.source}
                  name={item.name}
                  price={item.price.formatted_with_symbol}
                  quantity={item.quantity}
                  total={item.line_total.formatted_with_symbol}
                  key={i}
                  id={item.id}
                />
              );
            })}
          </div>
          <div className=" bg-light d-flex align-items-center justify-content-lg-end justify-content-around p-4 ">
            <h4 className="mb-0 me-2 me-sm-5">Subtotal:</h4>
            <h4 className="mb-0 ms-2 ms-sm-5">
              {props.cart.subtotal.formatted_with_symbol}
            </h4>
          </div>
          <div
            className="cart-button-wrap d-flex flex-column justify-content-center align-items-center ms-lg-auto  mt-3 m-auto m-lg-0 mt-lg-3"
            style={{ width: "10.5rem" }}
          >
            <button
              className="btn btn-dark text-light px-5"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button
              className="btn btn-dark text-light px-5"
              onClick={handleCapture}
            >
              Capture
            </button>
            <Link to="/" className="text-decoration-none text-dark mt-2">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    checkoutToken: state.checkoutToken,
  };
};

export default connect(mapStateToProps, { createCheckoutToken })(Cart);
