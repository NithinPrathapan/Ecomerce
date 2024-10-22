import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  // !fetch items
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, [cart]);
  // !localstorage

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} />}></Route>
          <Route path="/cart" element={<Cart products={products} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
