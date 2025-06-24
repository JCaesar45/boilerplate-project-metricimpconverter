const express = require("express");
const router = express.Router();
const ConvertHandler = require("../controllers/convertHandler");
const convertHandler = new ConvertHandler();

router.get("/convert", (req, res) => {
  const input = req.query.input;
  if (!input) return res.json({ error: "no input" });

  const initNum = convertHandler.getNum(input);
  const initUnit = convertHandler.getUnit(input);

  if (initNum === "invalid number" && initUnit === "invalid unit") {
    return res.json({ error: "invalid number and unit" });
  }
  if (initNum === "invalid number") {
    return res.json({ error: "invalid number" });
  }
  if (initUnit === "invalid unit") {
    return res.json({ error: "invalid unit" });
  }

  const returnNum = convertHandler.convert(initNum, initUnit);
  const returnUnit = convertHandler.getReturnUnit(initUnit);
  const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

  res.json({
    initNum,
    initUnit,
    returnNum,
    returnUnit,
    string,
  });
});

module.exports = router;
