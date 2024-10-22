import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [cart, setCart] = useState([]);

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

  // !fetchby name
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/products/search?q=${searchKey}`)
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
  };

  return (
    <div>
      <Navbar />
      <div className="bg-slate-50 shadow-md flex items-center h-full justify-center py-2 pr-4 px-2 w-[60%] m-auto ">
        <input
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          className="bg-transparent outline-none border-none w-full"
          placeholder="Search products here..."
          type="text"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-orange-500  px-12 py-2 rounded-r-md text-white font-semibold uppercase tracking-widest"
        >
          Search
        </button>
      </div>
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
