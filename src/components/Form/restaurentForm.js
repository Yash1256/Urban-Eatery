// user this form to create a register
// update register
import React from "react";
import { useForm } from "react-hook-form";
import "./productform.css";
import { useState } from "react";
import axios from "axios";

export default function RestaurantForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [submitted, setsubmitted] = useState(false);
  const onSubmit = async (register) => {
    const url =
      "https://urbaan-eatery.herokuapp.com/api/v1/restaurant/createRestaurant";
    axios
      .post(url, register)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
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
        <label for="restaurant-name">Restaurant Name</label>
        <input
          type="text"
          class="form-control"
          id="restaurant-name"
          name="name"
          ref={register}
          placeholder="Lord of the Wings"
          required="true"
        />
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <textarea
          class="form-control"
          id="address"
          rows="2"
          name="address"
          ref={register}
          required="true"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input
          type="phone"
          class="form-control"
          id="phoneNumber"
          name="phoneNumber"
          ref={register}
          placeholder="+91"
        />
      </div>
      <button type="button btn-lg" class="btn btn-outline-warning">
        Add Restaurant
      </button>
      {submitted == true ? <h2>Successfully Added</h2> : <div />}
    </form>
  );
}
