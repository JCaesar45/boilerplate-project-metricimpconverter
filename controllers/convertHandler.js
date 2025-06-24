const units = {
  gal: { returnUnit: "L", factor: 3.78541, spelledOut: "gallons" },
  l:   { returnUnit: "gal", factor: 1 / 3.78541, spelledOut: "liters" },
  mi:  { returnUnit: "km", factor: 1.60934, spelledOut: "miles" },
  km:  { returnUnit: "mi", factor: 1 / 1.60934, spelledOut: "kilometers" },
  lbs: { returnUnit: "kg", factor: 0.453592, spelledOut: "pounds" },
  kg:  { returnUnit: "lbs", factor: 1 / 0.453592, spelledOut: "kilograms" },
};

class ConvertHandler {
  getNum(input) {
    const result = input.match(/^[^a-zA-Z]*/)[0]; // all before first letter
    if (!result) return 1; // default to 1 if no number

    // Check for multiple fractions:
    if ((result.match(/\//g) || []).length > 1) return "invalid number";

    if (result.includes("/")) {
      const [numerator, denominator] = result.split("/");
      if (!denominator || isNaN(numerator) || isNaN(denominator)) return "invalid number";
      return parseFloat(numerator) / parseFloat(denominator);
    } else if (isNaN(result)) {
      return "invalid number";
    }
    return parseFloat(result);
  }

  getUnit(input) {
    const unitMatch = input.match(/[a-zA-Z]+$/);
    if (!unitMatch) return "invalid unit";
    let unit = unitMatch[0].toLowerCase();
    if (unit === "l") unit = "l"; // keep lowercase for matching
    if (!units[unit]) return "invalid unit";
    return unit === "l" ? "L" : unit;
  }

  getReturnUnit(initUnit) {
    initUnit = initUnit.toLowerCase();
    return units[initUnit]?.returnUnit || "invalid unit";
  }

  spellOutUnit(unit) {
    unit = unit.toLowerCase();
    return units[unit]?.spelledOut || "invalid unit";
  }

  convert(initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    const factor = units[initUnit]?.factor;
    if (!factor) return "invalid unit";
    return parseFloat((initNum * factor).toFixed(5));
  }

  getString(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  }
}

module.exports = ConvertHandler;
