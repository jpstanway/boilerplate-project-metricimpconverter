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
    var result;

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
