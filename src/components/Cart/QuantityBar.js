import React from "react";
import { connect } from "react-redux";
import { updateItemQuantity } from "../../actions";

function QuantityBar(props) {
  const handleDecrement = () => {
    props.updateItemQuantity(id, quantity - 1);
  };

  const handleIncrement = () => {
    props.updateItemQuantity(id, quantity + 1);
  };

  const { quantity, id } = props;
  return (
    <div className="quantityBar d-flex ">
      <div
        className="quantity-minus bg-secondary d-flex align-items-center justify-content-center qty-btn"
        onClick={handleDecrement}
      >
        <p className="m-0 text-light">-</p>
      </div>
      <div className="quantity-value d-flex align-items-center justify-content-center border border-secondary">
        <p className="m-0">{quantity}</p>
      </div>
      <div
        className="quantity-plus bg-secondary d-flex justify-content-center align-items-center qty-btn"
        onClick={handleIncrement}
      >
        <p className="m-0 text-light">+</p>
      </div>
    </div>
  );
}

export default connect(null, { updateItemQuantity })(QuantityBar);
