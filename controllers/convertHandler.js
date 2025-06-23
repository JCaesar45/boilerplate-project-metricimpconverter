function ConvertHandler() {
  const unitsMap = {
    gal: { returnUnit: "L", factor: 3.78541 },
    l:   { returnUnit: "gal", factor: 1 / 3.78541 },
    mi:  { returnUnit: "km", factor: 1.60934 },
    km:  { returnUnit: "mi", factor: 1 / 1.60934 },
    lbs: { returnUnit: "kg", factor: 0.453592 },
    kg:  { returnUnit: "lbs", factor: 1 / 0.453592 }
  };

  const spellOutUnit = {
    gal: "gallons",
    L: "liters",
    mi: "miles",
    km: "kilometers",
    lbs: "pounds",
    kg: "kilograms"
  };

  this.getNum = function (input) {
    let result = input.match(/^[\d/.]+/);
    if (!result) return 1;

    const number = result[0];
    if ((number.match(/\//g) || []).length > 1) {
      return "invalid number";
    }

    try {
      return eval(number);
    } catch (e) {
      return "invalid number";
    }
  };

  this.getUnit = function (input) {
    const match = input.match(/[a-zA-Z]+$/);
    if (!match) return "invalid unit";

    const unit = match[0].toLowerCase();
    return unitsMap[unit] ? (unit === "l" ? "L" : unit) : "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    const key = initUnit.toLowerCase();
    const returnUnit = unitsMap[key]?.returnUnit;
    if (!returnUnit) return "invalid unit";
    return returnUnit === "l" ? "L" : returnUnit;
  };

  this.spellOutUnit = function (unit) {
    const key = unit === "L" ? "L" : unit.toLowerCase();
    return spellOutUnit[key];
  };

  this.convert = function (initNum, initUnit) {
    const factor = unitsMap[initUnit.toLowerCase()]?.factor;
    if (!factor) return null;
    return parseFloat((initNum * factor).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
