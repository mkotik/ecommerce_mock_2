import React from "react";
import {
  CardElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { stripePromise } from "../../lib/stripe.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const AddressForm = () => {
  return (
    <section id="address-form">
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
              <button className="btn btn-danger">Return to cart</button>
              <button className="btn btn-primary">Continue to Payment</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

function PaymentForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    console.log(props.checkoutToken);
    console.log(paymentMethod.id);

    const orderDetails = {
      customer: {
        email: "mkotik97@gmail.com",
      },
      fulfillment: {
        shipping_method: "ship_O3bR5X98Mlnzdj",
      },
      shipping: {
        country: "US",
        name: "Marat Kotik",
        street: "14 Bramble Lane",
        town_city: "Matawan",
      },
    };

    const order = await commerce.checkout.capture(props.checkoutToken.id, {
      ...orderDetails,
      payment: {
        gateway: "stripe",
        stripe: {
          payment_method_id: paymentMethod.id,
        },
      },
    });

    console.log("ORDER", order);
  };

  return (
    <div>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <form className="payment-form m-auto mt-5" onSubmit={handleSubmit}>
            <h2 className="text-decoration-underline text-center">
              Payment Method
            </h2>
            <CardElement />

            <div className="d-flex justify-content-between">
              <Link to="/shipping">
                <button className="btn btn-danger">Return</button>
              </Link>
              <button type="submit" className="btn btn-primary">
                Pay {props.cost}
              </button>
            </div>
          </form>
        )}
      </ElementsConsumer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(PaymentForm);
