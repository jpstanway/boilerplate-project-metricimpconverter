/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require('mathjs');

function ConvertHandler() {
  
  this.getNum = function(input, index) {
    var result = input.slice(0, index);
    
    try {
      result = math.eval(result);
    } catch(error) {
      console.error(error);
      result = false;
    }

    return result;
  };
  
  this.getUnit = function(input, index) {
    var result = input.slice(index, input.length);
    const units = /^gal$|^l$|^km$|^mi$|^lbs$|^kg$/igm;

    return result.search(units) > -1 ? result : false;
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

    if (!initNum && !initUnit) {
      console.log('both invalid');
      return 'invalid number and unit';
    } else if(!initNum) {
      console.log('invalid number');
      return 'invalid number';
    } else if (!initUnit) {
      console.log('invalid unit');
      return 'invalid unit';
    }

    switch(initUnit) {
      case 'gal':
        result = initNum * galToL + 'L';
        break;
      case 'l':
        result = initNum / galToL + 'gal';  
        break;
      case 'lbs':
        result = initNum * lbsToKg + 'kg';
        break;
      case 'kg':
        result = initNum / lbsToKg + 'lbs';
        break;
      case 'mi':
        result = initNum * miToKm + 'km';
        break;
      case 'km':
        result = initNum / miToKm + 'mi';
        break;
      default:
        return 'invalid unit';     
    }
    console.log(result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
