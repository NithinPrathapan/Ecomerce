import React from "react";
import Card from "../Components/Card";

const Home = ({ products }) => {
  return (
    <div className="flex flex-col gap-6 my-12 justify-center items-center w-[80%] m-auto">
      <div>
        <h1 className="font-semibold text-4xl uppercase ">Top Offers</h1>
      </div>
      <div className="grid grid-cols-4 gap-12">
        {products.map((product) => (
          <Card key={product.id}  product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
