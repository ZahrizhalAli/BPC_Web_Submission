const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const db = require("./models/index");
db.sequelize.sync();
const fileUpload = require("express-fileupload");
require("dotenv").config();
// const authRouter = require("./routes/auth");

const app = express();
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
//db

//middleware
app.use(morgan("dev"));
//set minimum data sent by user, if bigger then it will cause an error
app.use(bodyParser.json({ limit: "5mb" }));

// app.use("/api", authRouter);
fs.readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

app.listen(5000, function (req, res) {
  console.log("Port runs on port 5000");
});
