import React from 'react';
import { HiShoppingCart } from "react-icons/hi";

function Navbar({ productCount }) {
  return (
    <div className="py-4 bg-white ">
      <div className="max-w-6xl flex justify-between mx-auto ">
        <img className="h-16" src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg" />
        <div className="flex flex-col  items-center ">
          <HiShoppingCart className="text-6xl text-primary-default" />
          <span className="-m-12 text-white ">{productCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
