import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";

function Cart() {
  return (
    <div>
      <Link
        class="text-2xl flex items-center w-24 py-1 rounded hover:bg-green-200 m-2"
        to="/"
      >
        <TbArrowBackUp /> HOME
      </Link>
      <div className="max-w-6xl px-24 py-16 mx-auto mt-16 bg-white">
        <div className="flex justify-between px-2 py-2 text-2xl bg-gray-200 border-2">
          {" "}
          <spam></spam>
          <spam></spam> <h>Product</h> <h>Price</h> <h>Quantity</h>{" "}
          <h>Subtotal</h>
        </div>

        <div className="flex items-center justify-between border-2 pr-7">
          <div className="flex items-center ">
            <HiOutlineX />
            <img
              className="w-24 p-2"
              src="https://trycasuals.com/wp-content/uploads/2018/06/mug-coffee-5-600x600.jpg"
            ></img>
          </div>
          <h className="font-bold text-primary-dark">Father's Day Coffee Mug</h>
          <h>$19.00 </h>
          <input type="number" className="w-10 h-8 border-2 " />
          <h>$133.00</h>
        </div>

        <div className="flex items-center justify-between border-2 pr-7">
          <div className="flex items-center ">
            <HiOutlineX />
            <img
              className="w-24 p-2"
              src="https://trycasuals.com/wp-content/uploads/2018/06/tshirt5-4-600x600.jpg"
            ></img>
          </div>
          <h className="font-bold text-primary-dark">Printed Green Tshirt</h>
          <h>$19.00 </h>
          <input type="number" className="w-10 h-8 border-2 " />
          <h>$133.00</h>
        </div>

        <div className="flex items-center justify-between p-2 border-2 ">
          <div>
            <input
              className="px-5 py-1 border-2"
              placeholder="Coupon code"
            ></input>
            <button className="px-5 py-1 text-white rounded bg-primary-dark">
              APPLY COUPON
            </button>
          </div>
          <button className="p-3 text-white rounded bg-primary-dark">
            UPDATE CART
          </button>
        </div>

        <div className="flex justify-between mt-5">
          <spam></spam>
          <div className="w-6/12">
            <h className="flex px-2 py-2 text-2xl bg-gray-200 border-2 ">
              {" "}
              Cart totals
            </h>
            <div className="px-2 py-2 border-2">
              <h className="mr-16">Subtotal</h> <h> $301.00</h>
            </div>
            <div className="flex px-2 py-2 border-2 ">
              <h className="mr-16">Total</h> <h> $301.00</h>
            </div>
            <div className="flex justify-center px-2 py-2 border-2">
              <button className="px-4 py-1 text-3xl text-white rounded bg-primary-dark">
                {" "}
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
