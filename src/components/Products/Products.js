import React from "react";
import ProductCard from "./ProductCard";
import "../../App.css";

function Products(props) {
  const { products, addToCart } = props;
  return (
    <div>
      <div className="products-padding" id="products"></div>
      <section className="py-5  products">
        <div className="container bagg">
          <div className="d-flex flex-wrap">
            {products.map((product) => (
              <ProductCard
                cardId={product.id}
                key={product.id}
                name={product.name}
                price={product.price.formatted_with_symbol}
                features={product.description}
                images={product.assets.map((cur) => cur.url)}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
