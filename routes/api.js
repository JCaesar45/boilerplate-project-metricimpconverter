const express = require('express');
const router = express.Router();
const ConvertHandler = require('../controllers/convertHandler.js');
const convertHandler = new ConvertHandler();

router.get('/api/convert', (req, res) => {
  const input = req.query.input;
  if (!input) return res.status(400).send('No input provided');

  const initNum = convertHandler.getNum(input);
  const initUnit = convertHandler.getUnit(input);

  // Check errors
  const numError = (initNum === 'invalid number');
  const unitError = (initUnit === 'invalid unit');

  if (numError && unitError) return res.send('invalid number and unit');
  if (numError) return res.send('invalid number');
  if (unitError) return res.send('invalid unit');

  const returnNum = convertHandler.convert(initNum, initUnit);
  const returnUnit = convertHandler.getReturnUnit(initUnit);
  const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

  res.json({
    initNum,
    initUnit,
    returnNum,
    returnUnit,
    string
  });
});

module.exports = router;
