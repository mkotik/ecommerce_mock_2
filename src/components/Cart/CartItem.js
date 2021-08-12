import React from "react";

function QuantityBar(props) {
  const { quantity } = props;
  return (
    <div className="quantityBar d-flex border border-secondary">
      <div className="quantity-minus bg-secondary d-flex align-items-center justify-content-center">
        <p className="m-0 text-light">-</p>
      </div>
      <div className="quantity-value d-flex align-items-center justify-content-center">
        <p className="m-0">{quantity}</p>
      </div>
      <div className="quantity-plus bg-secondary d-flex justify-content-center align-items-center">
        <p className="m-0 text-light">+</p>
      </div>
    </div>
  );
}

function CartItem(props) {
  const { image, name, price, quantity, total } = props;
  return (
    <div className="row border-top  py-2 cart-item-row ">
      <div className="col-5 product">
        <div className="d-flex justify-content-start align-items-center cart-product-col ">
          <div className=" w-50 ">
            <img src={image} className="img-fluid" />
          </div>
          <p className="ms-5 mb-0">{name}</p>
        </div>
      </div>
      <div className="col price d-flex align-items-center">
        <p className="mb-0">{price}</p>
      </div>
      <div className="col quantity d-flex align-items-center">
        <QuantityBar quantity={quantity} />
      </div>
      <div className="col total d-flex align-items-center">
        <p className="mb-0 ">{total}</p>
      </div>
    </div>
  );
}

export default CartItem;
