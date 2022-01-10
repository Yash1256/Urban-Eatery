// user this form to create a register
// update register
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./productform.css";
import { useState, useEffect } from "react";

export default function ProductForm() {
  // Getting restaurant restaurantList
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const baseurl =
    "https://urbaan-eatery.herokuapp.com/api/v1/restaurant/getAllRestaurant";
  const [restaurantList, setlist] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(baseurl, config)
        .then((response) => {
          const l = response.data.data;
          setlist((restaurantList) => [...l, restaurantList]);
        })
        .catch((errr) => {
          console.log(errr);
        });
    };
    fetchdata();
  }, []);

  // managing form
  const { register, handleSubmit, watch, errors } = useForm();
  const [submitted, setsubmitted] = useState(false);
  const onSubmit = (register) => {
    const url = "https://urbaan-eatery.herokuapp.com/api/v1/food/createItem";
    axios
      .post(url, register)
      .then((res) => {
        console.log(res.data);
        if (res.status == 201 || res.status == 200) {
          setsubmitted(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="p-5 overflow-auto" onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
        <label for="restaurant-select">Restaurant</label>
        <select
          class="form-control"
          id="restaurant-select"
          name="restaurant"
          ref={register}
        >
          {restaurantList.map((restaurant, index) => {
            return <option>{restaurant.name}</option>;
          })}
        </select>
      </div>
      <div class="form-group">
        <label for="product-name">Product Name</label>
        <input
          type="text"
          class="form-control"
          id="product-name"
          name="name"
          ref={register}
          placeholder="Pizza deilght"
          required="true"
        />
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input
          type="text"
          class="form-control"
          id="category"
          name="category"
          ref={register}
          placeholder="Pizza"
        />
      </div>
      <div class="form-group">
        <label for="image-link">Image Link</label>
        <input
          type="text"
          class="form-control"
          id="image-link"
          name="img"
          ref={register}
          placeholder=""
          required="true"
        />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input
          type="text"
          class="form-control"
          id="quantity"
          name="quantity"
          ref={register}
          placeholder="1"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          rows="2"
          name="description"
          ref={register}
        ></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Price</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          name="price"
          ref={register}
          placeholder="₹ 0"
        />
      </div>
      <button type="button btn-lg" class="btn btn-outline-success">
        Add Product
      </button>
      {submitted == true ? <h2> Product Added</h2> : <div />}
    </form>
  );
}
