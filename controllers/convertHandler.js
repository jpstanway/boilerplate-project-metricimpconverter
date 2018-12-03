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
      result = false;
    }
    
    // check for double fractions
    if(doubleFraction && doubleFraction.length > 1) {
      result = false;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var index = input.search(/[a-zA-Z]/);
    var result = input.slice(index, input.length);
    var exp = /^gal$|^l$|^km$|^mi$|^lbs$|^kg$/igm;

    if (result.search(exp) === -1) {
      result = false;
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

    result = units[initUnit.toLowerCase()];
    
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

    result = units[unit];
    
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

    result = conversion[initUnit];

    return parseFloat(result.toFixed(4));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
