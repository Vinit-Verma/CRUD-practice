const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoute = require("./Routes");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use("/", studentRoute);
mongoose
  .connect("mongodb://localhost:27017/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log("Err while connecting to database", e);
  });
// mongoose.set("strictQuery", true);

app.listen(3001);
