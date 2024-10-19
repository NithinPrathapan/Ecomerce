import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

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
  }, []);
  // !localstorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    console.log(cart);

  }, []);

  return (
    <div>
      <Navbar />
      <Home products={products} />
    </div>
  );
};

export default App;
