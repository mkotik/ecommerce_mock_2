import React from "react";
import QuantityBar from "./QuantityBar";
import { XCircle } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { removeItem } from "../../actions";

function CartItem(props) {
  const { image, name, price, quantity, total, id } = props;

  const handleRemove = () => {
    props.removeItem(id);
  };
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

      <div className="col-sm price d-flex align-items-lg-center align-items-center align-items-sm-start justify-content-center justify-content-sm-start flex-column flex-lg-row py-2 py-sm-0 ps-sm-5 ps-lg-3">
        <XCircle
          className="xcircle align-self-sm-end me-sm-5 d-lg-none remove-item-icon"
          onClick={handleRemove}
        />
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
        <XCircle className="xcircle " onClick={handleRemove} />
      </div>
    </div>
  );
}

export default connect(null, { removeItem })(CartItem);
