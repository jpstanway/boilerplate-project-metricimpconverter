/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require('mathjs');

function ConvertHandler() {
  
  this.getNum = function(input) {
    var index = input.search(/[a-zA-Z]/);
    var result = input.slice(0, index);
    var doubleFraction = result.match(/\//g);
    
    // evaluate number
    try {
      result = math.eval(result);
    } catch(error) {
      console.error(error);
      return false;
    }
    
    // check for double fractions
    if(doubleFraction && doubleFraction.length > 1) {
      return false;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var index = input.search(/[a-zA-Z]/);
    var result = input.slice(index, input.length);
    var exp = /^gal$|^l$|^km$|^mi$|^lbs$|^kg$/igm;
    
    if (result.search(exp) === -1) {
      return false;
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    const units = {
      "gal": "l",
      "l": "gal",
      "kg": "lbs",
      "lbs": "kg",
      "mi": "km",
      "km": "mi"
    };

    if (initUnit) {
      result = units[initUnit.toLowerCase()];
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    const units = {
      "gal": "gallons",
      "l": "litres",
      "mi": "miles",
      "km": "kilometers",
      "lbs": "pounds",
      "kg": "kilograms"
    };

    if (unit) {
      result = units[unit.toLowerCase()];
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    const conversion = {
      "gal": initNum * galToL,
      "l": initNum / galToL,
      "lbs": initNum * lbsToKg,
      "kg": initNum / lbsToKg,
      "mi": initNum * miToKm,
      "km": initNum / miToKm
    };

    if (initUnit) {
      result = conversion[initUnit.toLowerCase()];
      result = parseFloat(result.toFixed(5));
    }

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };
  
}

module.exports = ConvertHandler;
