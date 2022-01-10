import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProductAdminList(props) {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const baseurl = "https://urbaan-eatery.herokuapp.com/api/v1/food/getAllFoods";
  const [list, setlist] = useState([]);
  useEffect(() => {
    console.log("started searching");
    const fetchdata = async () => {
      await axios
        .get(baseurl, config)
        .then((response) => {
          const l = response.data.data;
          console.log(l);
          setlist((list) => [...l, list]);
        })
        .catch((errr) => {
          console.log(errr);
        });
    };
    fetchdata();
  }, []);

  console.log(list);

  const handleDelete = (data) => {
    const id = data._id;
    const url = `https://urbaan-eatery.herokuapp.com/api/v1/food/deleteItem/${id}`;
    axios.delete(url, { id: id }).then((res) => {
      if (res.status == 200) {
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
                      <img className="card-img" src={restaurant.img} />
                    </div>
                    <div class="flex-fill ml-5">
                      <div class="card-body">
                        <div class="font-weight-bold mt-3">
                          {restaurant.name}
                        </div>
                        <div class="mb-3">{restaurant.price}</div>
                        <div class="mb-3">{restaurant.category}</div>
                      </div>
                    </div>
                    <div class="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                      <button type="button" class="btn btn-outline-primary m-3">
                        <FontAwesomeIcon
                          className="edit-icon"
                          onClick={() =>
                            props.setcurrentComponent("Add Product")
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
