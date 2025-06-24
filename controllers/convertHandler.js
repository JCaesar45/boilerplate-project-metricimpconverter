function ConvertHandler() {
  const conversionRates = {
    gal: 3.78541,
    L: 1 / 3.78541,
    lbs: 0.453592,
    kg: 1 / 0.453592,
    mi: 1.60934,
    km: 1 / 1.60934
  };

  const unitMap = {
    gal: 'L',
    l: 'gal',
    L: 'gal',
    mi: 'km',
    km: 'mi',
    lbs: 'kg',
    kg: 'lbs'
  };

  const spellOut = {
    gal: 'gallons',
    L: 'liters',
    mi: 'miles',
    km: 'kilometers',
    lbs: 'pounds',
    kg: 'kilograms'
  };

  this.getNum = function(input) {
    const numPart = input.match(/^[^a-zA-Z]*/)[0] || '1';
    if ((numPart.match(/\//g) || []).length > 1) return 'invalid number';

    try {
      return eval(numPart);
    } catch (err) {
      return 'invalid number';
    }
  };

  this.getUnit = function(input) {
    const result = input.match(/[a-zA-Z]+$/);
    if (!result) return 'invalid unit';

    let unit = result[0].toLowerCase();
    if (unit === 'l') return 'L';
    return unitMap[unit] ? unit : 'invalid unit';
  };

  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    if (unit === 'l') unit = 'L';
    return unitMap[unit];
  };

  this.spellOutUnit = function(unit) {
    return spellOut[unit];
  };

  this.convert = function(initNum, initUnit) {
    let unit = initUnit === 'L' ? 'L' : initUnit.toLowerCase();
    let converted = initNum * conversionRates[unit];
    return parseFloat(converted.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
