import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div className="py-4 bg-white ">
      <div className="flex justify-between max-w-6xl mx-auto ">
        <img
          className="h-16"
          src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg"
        />
        <div className="">
          <Link to={"/Cart/"}>
            {" "}
            <HiShoppingCart className="text-6xl text-primary-default" />
            <span className="ml-5 ">{productCount}</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
