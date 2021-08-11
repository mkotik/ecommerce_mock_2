import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce.js";
import { Navbar, Showcase, Products } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);

  // Getting products from API
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const createCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
  };

  const addToCart = async (productId, quantity = 1) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
    console.log(cart);
  };

  useEffect(() => {
    fetchProducts();
    createCart();
  }, []);

  return (
    <div>
      <Navbar cartSize={cart.total_items} />
      <Showcase />
      <Products products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;
