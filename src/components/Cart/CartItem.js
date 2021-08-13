import React from "react";
import QuantityBar from "./QuantityBar";

// function QuantityBar(props) {
//   const { quantity } = props;
//   return (
//     <div className="quantityBar d-flex ">
//       <div className="quantity-minus bg-secondary d-flex align-items-center justify-content-center">
//         <p className="m-0 text-light">-</p>
//       </div>
//       <div className="quantity-value d-flex align-items-center justify-content-center border border-secondary">
//         <p className="m-0">{quantity}</p>
//       </div>
//       <div className="quantity-plus bg-secondary d-flex justify-content-center align-items-center">
//         <p className="m-0 text-light">+</p>
//       </div>
//     </div>
//   );
// }

function CartItem(props) {
  const { image, name, price, quantity, total, id } = props;
  return (
    <div className="row border-top  py-2 cart-item-row cart-guitar-row">
      <div className=" col-sm-5 product cart-guitar-col ">
        <div className="d-flex justify-content-start align-items-center cart-product-col ">
          <div className="cartItem-img-wrap">
            <img src={image} className="img-fluid" />
          </div>
          <p className="ms-5 mb-0 d-none d-lg-block">{name}</p>
        </div>
      </div>
      <div className="col-sm price d-flex align-items-lg-center align-items-center align-items-sm-start justify-content-center justify-content-sm-start flex-column flex-lg-row py-2 py-sm-0 ps-5 ps-lg-3">
        <p className="ms-lg-5 mb-0 d-lg-none lead">{name}</p>
        <p className="mb-0 ">{price}</p>
        <div className="d-lg-none ">
          <QuantityBar quantity={quantity} id={id} />
        </div>
      </div>
      <div className="col quantity align-items-center  d-none d-lg-flex">
        <QuantityBar quantity={quantity} id={id} />
      </div>
      <div className="col total d-lg-flex align-items-center d-none  ">
        <p className="mb-0 ">{total}</p>
      </div>
    </div>
  );
}

export default CartItem;
