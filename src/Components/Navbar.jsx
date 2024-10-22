import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);
  const [dropDown, setDropdown] = useState(false);
  console.log(dropDown);
  const toggleDropdown = () => {
    setDropdown(!dropDown);
  };
  return (
    <section>
      <nav
        className="flex justify-between items-center py-4 px-4
    "
      >
        <div className="">
          <a href="/">
            <h1 className="text-2xl font-oswald tracking-wide font-semibold px-4   text-gray-900   ">
              Ecommerce
            </h1>
          </a>
        </div>
        <div className=" gap-12 font-monster text-sm font-semibold  justify-between mx-auto  text-[16px] hidden sm:flex ">
          <h1 className="text-black  cursor-pointer ">About</h1>
          <h1 className="text-black  cursor-pointer ">Contact-us</h1>
          <h1 className="text-black  cursor-pointer ">Login</h1>
          <h1 className="text-black  cursor-pointer ">Sign up</h1>
        </div>

        <div className="flex gap-4 items-center px-2 ">
          <GiHamburgerMenu
            size={28}
            className="sm:hidden cursor-pointer"
            onClick={() => setDropdown(!dropDown)}
          />
          <div className="relative">
            <p className="absolute z-10 -top-4 -right-0 text-white bg-black w-[10px] h-[10px]  text-xs  flex items-center justify-center p-3 rounded-full">
              {totalQuantity}
            </p>
            <a href="/cart">
              <FaOpencart className="z-90" size={28} />
            </a>
          </div>
        </div>
      </nav>
      <div></div>
    </section>
  );
};

export default Nav;
