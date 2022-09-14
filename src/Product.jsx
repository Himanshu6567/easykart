import React from 'react';
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";


 "border-sky-500  shadow shadow-primary-dark"
function Product({ thumbnail, category, title, rating, price, id }) {

  return (
     <div className=" max-w-xs mx-8 border-2  pb-1 " >
      <div className="w-full aspect-square mb-2.8">
        <img className="w-full h-full object-cover" src={thumbnail} />
      </div>
      <div className="text-gray-700 text-xs">{category}</div>
      <div className="font-bold text-xl">{title}</div>
     <div className="flex gap-1 text-red-500 mb-2"> <BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></div>
        <div> ₹{price}/-</div>
      <Link className="text-blue-700 bg-green-100 px-2 rounded-md border border-black" to={"/ProductDetails/" + id}>ProductDetails</Link>
    </div>

  );
}
export default Product;
