import React, { useEffect, useState } from "react";

const DropdownList = ({ searchKey, setSearchKey, handleCategorySubmit }) => {
  const [categories, setCategories] = useState({});
  console.log(categories);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  return (
    <div>
      <select className="border p-2  outline-none" name="" id="">
        {categories.map((category) => (
          <option className="p-2" value="watch">{category.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
