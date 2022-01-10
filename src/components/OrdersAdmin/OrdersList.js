import firebase from "firebase";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function OrdersList() {
  const [list, setlist] = useState([]);
  const ordersRef = firebase.firestore().collection("orders");
  useEffect(() => {
    const fetch = async () => {
      const res = await ordersRef.get();
      console.log(res.docs);

      res.docs.forEach((item) => {
        setlist((list) => [...list, item.data()]);
      });
    };
    fetch();
  }, []);

  console.log(list);
  return (
    <div>
      {list.map((orders, index) => {
        return (
          <div class="container overflow-auto">
            <div class="row">
              <div class="col-lg-12">
                <div class="card border-0 mb-4 mt-4 shadow bg-white rounded">
                  <div class="d-flex p-4">
                    <div class="horizontal-card-bg-img">
                      <img className="card-img" src={orders.products[0].img} />
                    </div>
                    <div class="flex-fill ml-5">
                      <div class="card-body">
                        <div class="font-weight-bold mt-3">
                          {orders.products[0].name}
                        </div>
                        <div class="mb-3">
                          Qty: {orders.products[0].quantity}
                        </div>
                        <div class="mb-3">
                          Restaurant: {orders.products[0].restaurant}
                        </div>
                      </div>
                    </div>
                    <div class="horizontal-card-btn-container d-flex justify-content-center align-items-center">
                      {/* <button type="button" class="btn btn-outline-primary m-3">
                        <FontAwesomeIcon
                          className="edit-icon"
                          size="2x"
                          // color="blue"
                          icon={faEdit}
                        />
                      </button>
                      <button
                        type="button"
                        // onClick={() => handleDelete(restaurant)}
                        class="btn btn-outline-danger m-3"
                      >
                        <FontAwesomeIcon
                          className="delete-icon"
                          size="2x"
                          // color="red"
                          icon={faTrashAlt}
                        />
                      </button> */}
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
