import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../Foods/Foods.css";
import "./Account.css";
import { useAuth } from "../SignUp/useAuth";

let quotes = [
  "The Food Quotes makes me very hungry for the best food.",
  "Food is my world! No matter if anybody say me hippo!",
  "I love food because at the end, it is the only thing i love the most in my life!",
  "If i have to choose between Boyfriend or Food, I would definitely go with the food.",
  "My food love is pure than your fake love. Food live long!",
  "Food is my negative point, I can't be without good food.",
  "I love only healthy food, It gives me the strength more than junk food.",
  "I would love to be a healthy foodie not to be a fake love!",
  "Healthy food makes a healthy future and life.",
  "Eat healthy, feel healthy and stay healthy!",
];

const Account = (props) => {
  const [quote, setQuote] = useState(quotes[0]);
  const [type, setType] = useState("account");
  const userauth = useAuth();
  const [userid, setuserid] = useState();
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [image, setimage] = useState("");
  const [deliverydetails, setdeliverydetails] = useState(
    "Some where, From , SOme Where"
  );
  useEffect(() => {
    setdeliverydetails(props.deliverydetails);
    const user = async () => {
      if (userauth.user) {
        const id = await userauth.user;
        if (userauth.user != undefined || userauth.user != null) {
          setuserid(id);
          console.log(user);
          setimage(id.photoURL);
          setname(id.displayName);
          setemail(id.email);
        }
      }
    };
    user();

    setQuote(quotes[Math.floor(Math.random() * 10)]);
  }, []);
  console.log(userid);
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
        <div className="card-body">
          <div className="row">
            <div className="col w-50">
              <div className="float-container">
                <div className="overview">
                  <div className="name">
                    <h1 class="display-4">Profile</h1>
                    <div
                      className="avatar-container"
                      style={{ marginLeft: "70px" }}
                    >
                      <img src={image} alt="Profile Image" className="avatar" />
                    </div>
                    <p className="name-description lead">{quote}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col w-50" style={{ marginTop: "40px" }}>
              <h4 class="display-4">{name}</h4>
              <br />
              <p className="lead">{email} </p>
              <br />
              <div>{deliverydetails} </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
