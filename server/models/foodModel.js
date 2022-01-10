const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  category: String,
  img: String,
  description: String,
  story: String,
  price: Number,
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
  },
});

const Food = mongoose.model("Food", foodSchema, "Food Model");

module.exports = Food;