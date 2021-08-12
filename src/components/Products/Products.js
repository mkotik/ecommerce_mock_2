import React from "react";
import ProductCard from "./ProductCard";
import "../../App.css";
import { connect } from "react-redux";

function Products(props) {
  return (
    <div>
      <div className="products-padding" id="products"></div>
      <section className="py-5  products">
        <div className="container bagg">
          <div className="d-flex flex-wrap">
            {props.products.map((product) => (
              <ProductCard
                cardId={product.id}
                key={product.id}
                name={product.name}
                price={product.price.formatted_with_symbol}
                features={product.description}
                images={product.assets.map((cur) => cur.url)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Products);
