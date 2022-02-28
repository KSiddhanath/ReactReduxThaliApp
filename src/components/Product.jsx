import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../reducer/Slice";

const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const add = (item) => {
    item = JSON.parse(JSON.stringify(item));
    item.quantity = quantity;
    item.totalPrice = Number(item.quantity) * Number(item.price);
    dispatch(addTocart(item));
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="col-4 my-4">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img
          width="200px"
          height="200px"
          src={data.Image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title"> {data.name} </h4>
          <p className="card-text">₹{data.price}</p>
          <a href="#" className="btn btn-primary" onClick={() => add(data)}>
            Add To Cart
          </a>

          <div className="input-group">
            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-left-minus btn btn-danger btn-number"
                onClick={decrement}
              >
                <span className="glyphicon glyphicon-minus">-</span>
              </button>
            </span>
            <input
              type="text"
              id="quantity"
              name="quantity"
              className="form-control input-number"
              value={quantity}
              min="1"
              max="100"
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-right-plus btn btn-success btn-number"
                onClick={increment}
              >
                <span className="glyphicon glyphicon-plus">+</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
