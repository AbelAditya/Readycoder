const express = require("express");
const morgon = require("morgan");
const cors = require("cors");
const userModel = require("./models/userDetails");

const app = express();

app.use(express.json());
app.use(morgon("dev"));
// app.use(cors());

app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    message: "Request Received",
  });
});

app
  .route("/api/v1/user")
  .get((request, response) => {
    console.log("Request Received");

    response.status(200).json({
      status: "success",
      message: "Request Received",
    });
  })
  .post(async (request, response) => {
    try {
      let userDetails = await userModel.create(request.body);

      response.status(200).json({
        status: "success",
        data: userDetails,
      });
    } catch (err) {
      response.status(400).json({
        status: "fail",
        message: err,
      });
    }
  });

module.exports = app;
