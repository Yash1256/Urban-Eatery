import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./restaurantListTile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantAdminList(props) {
  // getting restaurant list from database
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const baseurl =
    "https://urbaan-eatery.herokuapp.com/api/v1/restaurant/getAllRestaurant";
  const [list, setlist] = useState([]);
  useEffect(() => {
    console.log("started searching");
    const fetchdata = async () => {
      await axios
        .get(baseurl, config)
        .then((response) => {
          const l = response.data.data;
          setlist((list) => [...l, list]);
        })
        .catch((errr) => {
          console.log(errr);
        });
    };
    fetchdata();
  }, []);

  const handleDelete = (data) => {
    console.log(data);
    const id = data._id;
    const url = `https://urbaan-eatery.herokuapp.com/api/v1/restaurant/deleteRestaurant/${id}`;
    axios.delete(url, { id: id }).then((res) => {
      console.log(res);
      if (res.status == 204) {
        console.log("Successfully deleted");
        props.setcurrentComponent("Dashboard");
      }
      if (res.status == 400) {
        console.log("Cant Delete.... ");
      }
    });
  };

  return (
    <div>
      {list.map((restaurant, index) => {
        return (
          <div class="container overflow-auto">
            <div class="row">
              <div class="col-lg-12">
                <div class="card border-0 mb-4 mt-4 shadow bg-white rounded">
                  <div class="d-flex p-4">
                    <div class="horizontal-card-bg-img">
                      <img src="images/restaurant.png" />
                    </div>
                    <div class="flex-fill ml-5">
                      <div class="card-body">
                        <div class="font-weight-bold mt-3">
                          {restaurant.name}
                        </div>
                        <div class="mb-3">{restaurant.address}</div>
                        <div class="mb-3">{restaurant.phoneNumber}</div>
                      </div>
                    </div>
                    <div class="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                      <button type="button" class="btn btn-outline-primary m-3">
                        <FontAwesomeIcon
                          className="edit-icon"
                          onClick={() =>
                            props.setcurrentComponent("Add Restaurant")
                          }
                          size="2x"
                          // color="blue"
                          icon={faEdit}
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(restaurant)}
                        class="btn btn-outline-danger m-3"
                      >
                        <FontAwesomeIcon
                          className="delete-icon"
                          size="2x"
                          // color="red"
                          icon={faTrashAlt}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
