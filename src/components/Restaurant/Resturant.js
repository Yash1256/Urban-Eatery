import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allFoods from "../../fakeData/index";
import burger from "../../images/foodicon/burger.png";
import drink from "../../images/foodicon/cold drinks.png";

import iceCream from "../../images/foodicon/ice cream.png";
import pizza from "../../images/foodicon/pizza.png";
import sandwich from "../../images/foodicon/sandwich.png";
import shawarma from "../../images/foodicon/shawarma.png";
import FoodItem from "../FoodItem/FoodItem";
import "./Foods.css";

const Restaurent = (props) => {
  const [foods, setFoods] = useState([]);
  const [restaurant, setrestaurant] = useState("A Salt & Battery");
  useEffect(() => {
    setFoods(allFoods);
  }, []);
  const selectedRestaurant = foods.filter(
    (food) => food.restaurant === restaurant
  );

  return (
    <section className="food-area my-5">
      <div className="container">
        <div>
          <h1 className="restaurant-name">{restaurant}</h1>
        </div>
        <nav>
          <ul className="nav justify-content-center mt-5">
            <li
              className="nav-item"
              onClick={() => setrestaurant("A Salt & Battery")}
            >
              <span
                to="A Salt & Battery"
                className={
                  restaurant === "A Salt & Battery"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <img
                  src={shawarma}
                  alt="foodIcon"
                  width="55px"
                  className="mr-2"
                />
                A Salt & Battery
              </span>
            </li>
            <li
              className="nav-item"
              onClick={() => setrestaurant("Burger's King")}
            >
              <span
                to="Burger's King"
                className={
                  restaurant === "Burgers King" ? "active nav-link" : "nav-link"
                }
              >
                <img
                  src={burger}
                  alt="foodIcon"
                  width="35px"
                  className="mr-2"
                />
                Burger`s King
              </span>
            </li>
            <li className="nav-item" onClick={() => setrestaurant("Pizza Hut")}>
              <span
                to="Pizza Hut"
                className={
                  restaurant === "Pizza Hut" ? "active nav-link" : "nav-link"
                }
              >
                <img src={pizza} alt="foodIcon" width="35px" className="mr-2" />
                Pizza Hut
              </span>
            </li>
            <li
              className="nav-item"
              onClick={() => setrestaurant("Sandwich Bar")}
            >
              <span
                to="Sandwich Bar"
                className={
                  restaurant === "sandwich" ? "active nav-link" : "nav-link"
                }
              >
                <img
                  src={sandwich}
                  alt="foodIcon"
                  width="35px"
                  className="mr-2"
                />
                Sandwich Bar
              </span>
            </li>
            <li
              className="nav-item"
              onClick={() => setrestaurant("Cream Bell")}
            >
              <span
                to="Cream Bell"
                className={
                  restaurant === "Cream Bell" ? "active nav-link" : "nav-link"
                }
              >
                <img
                  src={iceCream}
                  alt="foodIcon"
                  width="35px"
                  className="mr-2"
                />
                Cream Bell's
              </span>
            </li>
            <li
              className="nav-item"
              onClick={() => setrestaurant("Drinker's Bar")}
            >
              <span
                to="Dinker's Bar"
                className={
                  restaurant === "Drinker's Bar"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                <img src={drink} alt="foodIcon" width="30px" className="mr-2" />
                Drinker's Bar
              </span>
            </li>
          </ul>
        </nav>

        <div className="row my-5">
          {selectedRestaurant.map((food) => (
            <FoodItem food={food} key={food.id} />
          ))}
        </div>

        <div className="text-center">
          {props.cart.length ? (
            <Link to="/checkout">
              <button className="btn btn-danger">Check Out Your Food</button>
            </Link>
          ) : (
            <button disabled className="btn btn-secondary">
              Check Out Your Food
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Restaurent;
