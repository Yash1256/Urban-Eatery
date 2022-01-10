const Restaurant = require("./../models/restaurantModel");

exports.createRestaurant = async (req, res) => {
  try {
    const { name, phoneNumber, address } = req.body;

    const result = await Restaurant.create({ name, phoneNumber, address });

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const result = await Restaurant.findById(req.params.id);

    if (!result) {
      return res.status(400).json({
        status: "fail",
        message: "Error Occured",
      });
    }

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllRestaurant = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const result = await Restaurant.find();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const { name, address, phoneNumber } = req.body;

    const updatedData = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { name, address, phoneNumber },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({
        status: "fail",
        message: "Bad Request",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedData,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const result = await Restaurant.findByIdAndDelete(req.body.id);

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Bad Request",
      });
    }

    res.status(201).json({
      message: "success",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.displayRestaurantFood = async (req, res) => {
  try {
    const result = await Restaurant.findById(req.params.id).populate(
      "restaurantFoods",
      "name category description story"
    );

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Bad Request",
      });
    }

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
