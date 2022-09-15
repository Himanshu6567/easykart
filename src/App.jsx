import React, { useState } from "react";
import Productlistpage from "./Productlistpage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Cart from "./Cart";

function App() {
  const saveDatatring = localStorage.getItem("my-cart") || "{}";
  const saveddata = JSON.parse(saveDatatring);
  const [cart, setCart] = useState(saveddata);
  console.log("abc", cart);
  function handleAddToCart(productID, count) {
    const oldCount = cart[productID] || 0;
    const newcart = { ...cart, [productID]: oldCount + count };
    setCart(newcart);

    const cartString = JSON.stringify(newcart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-gray-200 ">
      <Navbar productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<Productlistpage />} />
          <Route
            path="/ProductDetails/:id"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />

          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
export default App;
