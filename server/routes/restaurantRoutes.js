const express = require("express");
const restaurantController = require("./../controller/restaurantController");

const router = express.Router();

router.post("/createRestaurant", restaurantController.createRestaurant);
router.get("/getRestaurant/:id", restaurantController.getRestaurantById);
router.get("/getAllRestaurant", restaurantController.getAllRestaurant);
router.patch("/updateRestaurant/:id", restaurantController.updateRestaurant);
router.post("/deleteRestaurant", restaurantController.deleteRestaurant);
router.get("/restaurantItems/:id", restaurantController.displayRestaurantFood);

module.exports = router;
