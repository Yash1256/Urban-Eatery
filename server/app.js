const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const foodRoutes = require("./routes/foodRoute");
const restaurantRoutes = require("./routes/restaurantRoutes");

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));



app.use(cors())
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

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
