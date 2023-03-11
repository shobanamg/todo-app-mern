const express = require("express");
require("dotenv").config();
const cors = require("cors");
const todoRoute = require("./router/todoRoute");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

router.use("/todos", todoRoute);

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

app.listen(5000, () => console.log("Backend server is running!"));
