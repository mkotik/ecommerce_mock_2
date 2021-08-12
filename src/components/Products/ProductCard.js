import React, { useState } from "react";
import { connect } from "react-redux";
import { commerce } from "../../lib/commerce";
import { addToCart } from "../../actions";
import { ChevronDown as Down } from "react-bootstrap-icons";
import { ChevronUp as Up } from "react-bootstrap-icons";
import { ChevronLeft as Left } from "react-bootstrap-icons";
import { ChevronRight as Right } from "react-bootstrap-icons";

const Carousel = (props) => {
  const { cardId, mainImg, otherImages } = props;
  return (
    <div
      id={`carousel-${cardId}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={mainImg} className="d-block w-100" />
        </div>
        {otherImages.map((img, i) => (
          <div key={i} className="carousel-item">
            <img src={img} className="d-block w-100" />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${cardId}`}
        data-bs-slide="prev"
      >
        <Left color="gray" className="h1 m-0" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${cardId}`}
        data-bs-slide="next"
      >
        <Right color="gray" className="h1 m-0" />
      </button>
    </div>
  );
};

function ProductCard(props) {
  const [expanded, setExpanded] = useState(false);
  const { cardId, name, price, features, images, addToCart } = props;

  const handleAddToCart = async () => {
    const { cart } = await commerce.cart.add(cardId);
    props.addToCart(cart);
  };

  return (
    <div className="p-2 card-wrap">
      <div className="card shadow">
        <div
          style={{ width: "100%" }}
          className="bg-white d-flex justify-content-center align-items-center "
        >
          <Carousel
            cardId={cardId}
            mainImg={images[0]}
            otherImages={images.slice(1, images.length)}
          />
        </div>
        <div className="card-body bg-light w-100 ">
          <div className="card-title d-flex align-items-center justify-content-between">
            <h4 className="card-title m-0">{name}</h4>
            <p className="lead m-0">{price}</p>
          </div>
          <button
            className="bg-light border-0 text-info p-0 mb-1"
            data-bs-toggle="collapse"
            data-bs-target={`#${cardId}`}
            onClick={() => setExpanded((expanded) => !expanded)}
          >
            <span>
              Features
              {!expanded && <Down className="ms-1" />}
              {expanded && <Up className="ms-1" />}
            </span>
          </button>
          <div className="collapse" id={cardId}>
            <div dangerouslySetInnerHTML={{ __html: features }}></div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success mt-2"
              style={{ bottom: "0px", right: "0px" }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addToCart })(ProductCard);
