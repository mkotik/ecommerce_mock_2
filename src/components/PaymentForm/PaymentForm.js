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
              <Link to="/cart">
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
