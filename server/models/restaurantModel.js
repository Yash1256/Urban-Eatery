const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    address: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

restaurantSchema.virtual("restaurantFoods", {
  ref: "Food",
  localField: "_id",
  foreignField: "restaurant",
});

const Restaurant = mongoose.model(
  "Restaurant",
  restaurantSchema,
  "Restaurant Model"
);

module.exports = Restaurant;
