import React, { useEffect, useState } from "react";
import ProductList from './ProductList';
import { getProductlist } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { CgArrowLongRight, } from "react-icons/cg";


function Productlistpage() {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default")

  useEffect(function() {
    const xyz = getProductlist();

    xyz.then(function(products) {

      setproductList(products);
      setLoading(false);
    });

  }, []);

  let data = productList.filter(function(item) {
    const lowercasetitle = item.title.toLowerCase();
    const lowercaseQuery = query.toLowerCase();
    return lowercasetitle.indexOf(lowercaseQuery) != -1;
  });


  if (sort == "price") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  } else if (sort == 'title') {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }
  else if (sort == "HtoL") {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleshort(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>


      <div class="p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 mt-16 sm:flex justify-between ">

        <input value={query}
          placeholder="search"
          className="border border-red-400 rounded w-32"
          onChange={handleQueryChange}
        />

        <select onChange={handleshort} class=" w-32 border border-red-900 rounded" value={sort} >
          <option value="default">Default sorting </option>
          <option value="title">short by title</option>
          <option value="price">short by:low to high</option>
          <option value="HtoL">short by:high to low</option>
        </select>
      </div>


      {data.length > 0 && <ProductList product={data} />}
      {data.length == 0 && <NoMatching />}

      <div class="flex gap-2 max-w-6xl mx-auto m-4">
        <button className="py-3 px-5 border-2 border-primary-dark hover:bg-primary-dark ">1</button>
        <button className="py-3 px-5 border-2 border-primary-dark hover:bg-primary-dark" >2</button>
        <button className="py-3 px-4 border-2 border-primary-dark hover:bg-primary-dark"><CgArrowLongRight /></button>
      </div>

    </div>

  );
}

export default Productlistpage;
