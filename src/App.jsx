import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import SearchComponent from "./Components/SearchComponent";
import DropdownList from "./Components/DropdownList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [cart, setCart] = useState([]);
  console.log(searchKey);

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

  useEffect(() => {
    console.log("searchkey", searchKey);
    fetch(`https://dummyjson.com/products/category/${searchKey}`)
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
  }, [searchKey]);

  // !fetchby name
  const handleSubmit = (e) => {
    console.log("btn clicked");
    console.log("searchkey", searchKey);
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

  // fetch by category
  const handleCategorySubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-12  w-[80%] justify-between  mx-auto my-12 ">
        <DropdownList
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          handleCategorySubmit={handleCategorySubmit}
        />
        <SearchComponent
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          handleSubmit={handleSubmit}
        />
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
