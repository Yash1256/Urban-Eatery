import React from "react";
import { Link } from "react-router-dom";

const FoodItemPastOrders = (props) => {
  const { id, name, description, price, img } = props.food;

  return (
    <div className="col-md-4 mb-4">
      <Link to={"food/" + id}>
        <div className="card text-center">
          <img src={img} alt="FoodItem" className="card-img-top" />

          <div className="card-body">
            <h5>{name}</h5>
            <p>{description}</p>
            <h4>₹{price.toFixed(1) * 40}</h4>
            <button disabled className="btn btn-block btn-secondary">
              Order Again
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodItemPastOrders;
