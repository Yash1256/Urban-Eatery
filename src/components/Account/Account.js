import React, { useEffect, useState } from "react";
import "./../Foods/Foods.css";
import firebase from "../firebase-config";
import { Link } from "react-router-dom";
import "./account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHeart } from "@fortawesome/free-solid-svg-icons";

const Account = (props) => {
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [image, setimage] = useState("");
  const [uid, setuid] = useState("");
  const [deliverydetails, setdeliverydetails] = useState("");

  useEffect(() => {
    const user = () => {
      const user = firebase.auth().currentUser;

      if (user) {
        setimage(user.photoURL);
        setname(user.displayName);
        setemail(user.email);
        setuid(user.uid);
      }
    };
    user();
  }, []);

  console.log("UID: " + uid);
  return (
    <>
      <h1 className="profile-heading">My Profile</h1>
      <div class="row py-5 px-4">
        <div class="col-xl-4 col-md-6 col-sm-10 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 bg-dark">
              <div class="media align-items-end profile-header">
                <div class="profile mr-3">
                  <img
                    src={image}
                    alt="..."
                    width="130"
                    class="rounded mb-2 img-thumbnail"
                  />

                  <Link to="/pastorder">
                    <a href="#" class="btn btn-dark btn-sm btn-block">
                      My Orders
                    </a>
                  </Link>
                </div>
                <div class="media-body mb-5 text-white">
                  <h4 class="mt-0 mb-0">
                    {name}{" "}
                    {uid === process.env.REACT_APP_BASE_URL ? (
                      "(admin)"
                    ) : (
                      <div />
                    )}
                  </h4>
                  <p class="small mb-4">
                    {" "}
                    <i class="fa fa-map-marker mr-2"></i>
                    {email}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">8</h5>
                  <small class="text-muted">
                    {" "}
                    <FontAwesomeIcon icon={faTruck} />
                    <i class="fa fa-picture-o mr-1"></i>Delivery
                  </small>
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">12</h5>
                  <small class="text-muted">
                    {" "}
                    <FontAwesomeIcon icon={faHeart} />
                    <i class="fa fa-user-circle-o mr-1"></i>Likes
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
