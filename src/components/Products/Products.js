import React from "react";
import ProductCard from "./ProductCard";

function Products(props) {
  const { products } = props;
  console.log(products);
  return (
    <div>
      <div className="products-padding" id="products"></div>
      <section className="p-5  products">
        <div className="container">
          <div className="d-flex flex-wrap">
            {products.map((product) => (
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

export default Products;
