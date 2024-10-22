import React from "react";
import star from "../assets/star.png";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  function addToCart() {
    dispatch(addItemToCart(product));
  }
  const cartitems = useSelector((state) => state.cart.cart);
  const existingItem = cartitems.find((item) => item.id === product.id);

  return (
    <div className="bg-gradient-to-br font-monster   from-[#211021] to-[#420242ee] w-[100%] max-h-[380px] min-h-[360px] shadow-md  rounded-md  p-4 flex flex-col gap-2 ">
      <div className="flex justify-center items-center rounded-md bg-white h-[180px]">
        <img
          className="rounded-md object-contain  mx-auto shadow-xl min-w-full h-full "
          src={product.images[0]}
          alt="product"
        />
      </div>
      <div className="flex justify-between gap-6 items-center">
        <h1 className="text-white  font-semibold text-lg">{product.brand}</h1>
        {existingItem ? (
          <button
            id="button"
            className="bg-yellow-400  text-sm rounded-full py-2 px-4 font-semibold
      border-none
     "
          >
            <a href="/cart">Go to cart</a>
          </button>
        ) : (
          <button
            onClick={() => {
              addToCart(product);
            }}
            id="button"
            className="bg-yellow-400  text-sm rounded-full py-2 px-4 font-semibold
        border-none
       "
          >
            Add to cart
          </button>
        )}
      </div>
      <div className="flex">
        <h1 className="text-yellow-300 flex items-center gap-2 rounded-md tracking-widest font-semibold ">
          <span>
            <img className="w-4" src={star} alt="" />
          </span>{" "}
          {product.rating}
        </h1>
      </div>
      <div className="flex flex-wrap text-white tracking-tighter text-sm ">
        <h1 className="line-clamp-2">{product.description}</h1>
      </div>

      <div className="text-yellow-300 font-semibold">
        <h1>
          Price : <span>$ {product.price}</span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
