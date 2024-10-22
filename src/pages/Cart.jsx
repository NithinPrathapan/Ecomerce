import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../store/cartSlice";

const Cart = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const listItems = [];
  cartItems.map((cartitem) => {
    const existing = products.find((product) => product.id === cartitem.id);
    if (existing) listItems.push({ existing, quantity: cartitem.quantity });
  });

  // find total amount

  console.log(listItems, "lstitems");
  const totalAmount = listItems
    .reduce((total, item) => {
      return total + item.existing.price * item.quantity;
    }, 0)
    .toFixed(2);

  const totalQuantity = listItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  console.log(totalAmount);

  function increment(id) {
    dispatch(incrementQuantity(id));
  }
  function decrement(id) {
    console.log("from decrement", id);
    dispatch(decrementQuantity(id));
  }

  function removeFromCart(id) {
    dispatch(removeItem(id));
  }
  return (
    <div>
      <div className="flex flex-col justify-between w-[80%] m-auto py-12">
        {listItems && listItems.length > 0 ? (
          listItems.map((item) => (
            <div className="flex  gap-4 border p-4 w-full">
              <div className="flex items-center hover:border-b-2 hover:border-orange-500 border-r transition-all ease-in-out duration-200  gap-2 border-b  justify-around w-full">
                <img
                  className=" object-cover flex justify-center items-center border-none"
                  width={100}
                  height={100}
                  src={item.existing.images[0]}
                  alt=""
                />
              </div>
              <div className="flex items-center hover:border-b-2 hover:border-orange-500 transition-all ease-in-out duration-200 border-r  px-4 gap-2 border-b py-1 justify-around w-full">
                <h1>Product</h1>
                <p className="font-semibold">{item.existing.brand}</p>
              </div>
              <div className="flex items-center hover:border-b-2 hover:border-orange-500 transition-all ease-in-out duration-200 border-r  px-4 gap-2 border-b py-1 justify-around w-full">
                <h1>Price</h1>
                <p className="font-semibold">${item.existing.price}</p>
              </div>
              <div className="flex items-center hover:border-b-2 hover:border-orange-500 transition-all ease-in-out duration-200 border-r  px-4 gap-2 border-b py-1 justify-around w-full">
                <div className="flex gap-2 items-center justify-between">
                  <h1>Quantity</h1>
                  <p className="font-semibold">{item.quantity}</p>
                </div>
                <div className="flex flex-col items-center  gap-1  rounded-md">
                  <button
                    onClick={() => {
                      increment(item.existing.id);
                    }}
                    className=" w-4 rounded-full h-4 flex items-center p-4 shadow-md justify-center text- font-bold hover:scale-105"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      decrement(item.existing.id);
                    }}
                    className=" w-4 rounded-full h-4 flex items-center p-4 shadow-md justify-center text- font-bold hover:scale-105"
                  >
                    -
                  </button>
                </div>
              </div>
              <div
                onClick={() => {
                  removeFromCart(item.existing.id);
                }}
                className="flex items-center hover:border-b-2 hover:bg-[#f00] cursor-pointer transition-all ease-in hover:text-white font-semibold tracking-wider duration-300 border-r  px-4 gap-2 border-b py-1 justify-around w-full"
              >
                <button>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="h-10 w-full text-center font-semibold text-orange-500 flex items-center justify-center my-[10%] text-8xl">
            Your Cart is Empty
          </h1>
        )}
      </div>
      <div className="w-[80%] flex flex-col gap-4 m-auto border-dashed border-2 p-4">
        <h1 className="text-2xl font-sans uppercase font-semibold">
          Proceed To Payment
        </h1>
        <div className="flex flex-col gap-2">
          <div>
            <h1>Total Quantity</h1>
            <p>{totalQuantity}</p>
          </div>
          <div>
            <h1>Total Amount</h1>
            <p>$ {totalAmount}</p>
          </div>
          <div>
            <button className="bg-orange-500 px-8 py-3 rounded-md uppercase text-white font-semibold tracking-widest mt-4 mb-4">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
