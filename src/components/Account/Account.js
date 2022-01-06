import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../Foods/Foods.css";
import "./Account.css";
import firebase from "./../firebase-config";
import { useAuth } from "../SignUp/useAuth";

const Account = (props) => {
  const [type, setType] = useState("account");
  const userauth = useAuth();
  const [userid, setuserid] = useState("nonuser");

  useEffect(() => {
    const id = userauth.user == null ? "nonuser" : userauth.user.uid;
    setuserid(id);
    console.log(userid);
  }, []);

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
          <div className="row">
            <div className="col w-50">
              <div className="float-container">
                <div className="overview">
                  <div className="avatar-container">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Pandit_Birju_Maharaj.jpg"
                      alt="Birju Avatar"
                      className="avatar"
                    />
                  </div>
                  <div className="name">
                    <h1>Birju</h1>
                    <p className="name-description">Foodie Lover</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col w-50" style={{ marginTop: "40px" }}>
              <div>Name : </div>
              <br />
              <div>email : </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Account.propTypes = {
//   history: PropType.shape({
//     push: PropType.func
//   }).isRequired
// };

export default Account;
