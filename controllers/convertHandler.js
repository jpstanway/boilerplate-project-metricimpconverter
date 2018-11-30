/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input, index) {
    var result = input.slice(0, index);
    result = parseInt(result);

    return result ? result : 'invalid number';
  };
  
  this.getUnit = function(input, index) {
    var result = input.slice(index, input.length);
    const units = /^gal$|^l$|^km$|^mi$|^lbs$|^kg$/igm;

    return result.search(units) > -1 ? result : 'invalid unit';
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

    if (typeof initNum !== 'number' && initUnit === 'invalid unit') {
      return initNum + ' and ' + initUnit;
    } else if (typeof initNum !== 'number') {
      return initNum;
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

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
