import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem } from "../reducer/Slice";

const Cart = () => {
  const thali = useSelector((state) => state.counter.thali);
  console.log(thali);
  const dispatch = useDispatch();
  const Remove = (id) => {
    dispatch(RemoveItem(id));
  };
  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }
  return (
    <div className="container mx-3">
      <h1 className="text-center">You Have</h1>
      <div className="row">
        {thali.map((ele, id) => (
          <div className="col-3">
            <div className="card " key={id}>
              <img
                src={ele.Image}
                className="card-img-top"
                alt="..."
                width="100px"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p className="card-text">Quantity: {ele.quantity}</p>
                <p>Price: ₹ {ele.price}</p>
                <p>TotalPrice: ₹ {ele.totalPrice}</p>
                <button onClick={() => Remove(id)} className="btn btn-primary">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <h3 className="text-center text-success">
          Your Total Cart Value is : ₹ {sum}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
