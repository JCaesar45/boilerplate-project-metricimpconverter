const galToL = 3.78541;
const lbsToKg = 0.453592;
const miToKm = 1.60934;

function roundToFive(num) {
  return Math.round(num * 1e5) / 1e5;
}

function convertHandler() {
  this.getNum = function(input) {
    // Extract the number part (everything before the first letter)
    let result = input.match(/^[\d\.\/]+/); // number can contain digits, dot, slash
    if (!result) return 1; // No number defaults to 1

    let numStr = result[0];

    // Reject double fractions like '3/2/3'
    if ((numStr.match(/\//g) || []).length > 1) return 'invalid number';

    if (numStr.includes('/')) {
      const numbers = numStr.split('/');
      if (numbers.length !== 2) return 'invalid number';
      let numerator = numbers[0];
      let denominator = numbers[1];
      if (isNaN(numerator) || isNaN(denominator)) return 'invalid number';
      return parseFloat(numerator) / parseFloat(denominator);
    } else {
      if (isNaN(numStr)) return 'invalid number';
      return parseFloat(numStr);
    }
  };

  this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]+$/); // unit is the letters at the end
    if (!result) return 'invalid unit';

    let unit = result[0].toLowerCase();

    const validUnits = ['gal','l','mi','km','lbs','kg'];
    if (!validUnits.includes(unit)) return 'invalid unit';

    // Return 'L' capitalized for liters
    if (unit === 'l') return 'L';
    return unit;
  };

  this.getReturnUnit = function(initUnit) {
    const unitMap = {
      gal: 'L',
      L: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs',
    };
    return unitMap[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const fullNames = {
      gal: 'gallons',
      L: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms',
    };
    return fullNames[unit];
  };

  this.convert = function(initNum, initUnit) {
    let result;
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        return null;
    }
    return roundToFive(result);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = convertHandler;
