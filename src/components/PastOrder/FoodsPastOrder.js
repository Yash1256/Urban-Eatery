import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FoodItemPastOrders from "./FoodItemPastOrders";
import "./PastOrder.css";
import firebase from "../firebase-config";
import { useAuth } from "../SignUp/useAuth";

const FoodsPastOrder = (props) => {
  const [type, setType] = useState("pastOrder");
  const userauth = useAuth();
  const [foods, setFoods] = useState([]);
  const [userid, setuserid] = useState();

  useEffect(() => {
    const user = () => {
      const user = firebase.auth().currentUser;
      if (user) {
        setuserid(user.uid);
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
        <h1 className="my-order-heading">My Orders</h1>
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
