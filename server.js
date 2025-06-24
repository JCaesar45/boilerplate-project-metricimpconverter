require('dotenv').config();
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const apiRoutes = require("./routes/api");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Metric-Imperial Converter API");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // for testing
