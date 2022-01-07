import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FoodItemPastOrders from "../FoodItem/FooditemPastOrder";
import "./Foods.css";
import "./PastOrder.css";
import firebase from "../firebase-config";
import { useAuth } from "../SignUp/useAuth";

const FoodsPastOrder = (props) => {
  const [type, setType] = useState("pastOrder");
  const userauth = useAuth();
  const [foods, setFoods] = useState([]);
  const [userid, setuserid] = useState();

  useEffect(() => {
    const user = async () => {
      if (userauth.user) {
        const id = await userauth.user.uid;
        if (userauth.user != undefined || userauth.user != null) {
          setuserid(id);
        }
      }
    };
    user();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      if (userid != undefined) {
        const Ref = await firebase
          .firestore()
          .collection("users")
          .doc(userid)
          .collection("orders");

        Ref.where("products", "!=", [])
          .get()
          .then((snap) => {
            snap.forEach((doc) => {
              const data = doc.data()["products"];
              setFoods((foods) => [...foods, data[0]]);
            });
          });
      }
    };
    fetchdata();
    setFoods(foods);
  }, [userid]);
  const selectedFastFoods = foods;
  return (
    <section className="food-area my-5">
      <div className="container">
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item" onClick={() => setType("account")}>
              <span
                to="account"
                className={type === "account" ? "active nav-link" : "nav-link"}
              >
                <Link to="/account">Account</Link>
              </span>
            </li>
            <li className="nav-item" onClick={() => setType("pastOrder")}>
              <span
                to="pastOrder"
                className={
                  type === "pastOrder" ? "active nav-link" : "nav-link"
                }
              >
                <Link to="/pastOrder">Past Order</Link>
              </span>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="row my-5">
            {selectedFastFoods.map((food) => (
              <FoodItemPastOrders food={food} key={food.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodsPastOrder;
