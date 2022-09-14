import React from 'react';
import Product from "./Product";


function ProductList({ product }) {
  return (
    <div class= " p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 md:grid grid-cols-3 gap-y-3 space-y-3 md:space-y-0 ">
      
      {product.map(function(item) {
        return (
          <div>
          <Product key={item.title} {...item}/>

         </div>
        );
  })}
       </div>

  );

}

export default ProductList;


