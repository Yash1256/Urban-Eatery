const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");
const foodRoutes = require("./routes/foodRoute");
const restaurantRoutes = require("./routes/restaurantRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      description: "Product purchase",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

const DB =
  "mongodb+srv://yash1256:yash1256@urban-eatery.wf7ld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

app.use("/api/v1/food", foodRoutes);

app.use("/api/v1/restaurant", restaurantRoutes);

app.all("*", (req, res) => {
  return res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Sever is listening on port ${port}`);
});
