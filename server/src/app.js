require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const helmet = require("helmet");

const apiRoutes = require("./api");

const port = process.env.PORT || 5000;
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.CLIENT_URL }));

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

module.exports = app;
