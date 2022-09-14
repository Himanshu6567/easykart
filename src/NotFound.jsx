import React from 'react';
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
      <div className="">
        <h className="text-5xl sm:text-6xl  text-yellow-500 flex justify-center mt-5">Oops !</h>
        <h className="text-3xl sm:text-4xl font-mono text-red-500 mt-2 flex justify-center mt-5">404 PAGE NOT FOUND</h>
      </div >
      <div className="flex items-center justify-between">
        <h className="text-gray-700 ml-3 sm:text-3xl">The page you are looking for might have been removed had its name changed or is temporarily unavailable. </h>
        <img className="w-44 h-44 sm:w-auto   sm:h-auto" src="https://media.discordapp.net/attachments/1005498488517312653/1017788499442798602/123IMG_20220909_183059-removebg-preview.png"></img>
      </div>
      <div className=" flex flex-row justify-center items-center mt-5 sm:mt-0">
        <Link className=" p-1 text-white rounded bg-primary-default hover:bg-primary-dark m-2" to="/" >BACK TO HOME PAGE</Link>
        <a className=" p-1 text-white rounded bg-primary-default hover:bg-primary-dark m-2" href="https://codeyogi.io/#contact">CONTACT US</a>
      </div>
    </div>

  );

}

export default NotFound;