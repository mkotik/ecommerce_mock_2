import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce.js";
import { Navbar, Showcase, Products } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Showcase />
      <Products products={products} />
    </div>
  );
}

export default App;
