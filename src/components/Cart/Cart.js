import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";

function Cart(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <section className="section-car p-5">
      {props.cart.line_items && (
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="row items-header text-start mb-2">
            <div className="col-5 ">Product</div>
            <div className="col ">Price</div>
            <div className="col ">Quantity</div>
            <div className="col ">Total</div>
          </div>
          {props.cart.line_items.map((item, i) => {
            return (
              <CartItem
                image={item.media.source}
                name={item.name}
                price={item.price.formatted_with_symbol}
                quantity={item.quantity}
                total={item.line_total.formatted_with_symbol}
                key={i}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
