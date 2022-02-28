import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Menu() {
  const productData = useSelector((state) => state.counter.products);

  return (
    <div className="container">
      <h1 className="text-center ">Click Here To Explore</h1>
      <div className="row my-4">
        {productData.map((ele, i) => (
          <Product key={i} data={ele} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
