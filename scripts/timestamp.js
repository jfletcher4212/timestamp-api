var net = require('net');
var Sugar = require('sugar-date');

module.exports = {
/*
 * Input:  a unix timestamp or date String, in a format recognized by the Date.parse() method.
 * Output: a date object based off the input, or null if the input is invalid.
*/
  getDate: function(timestamp){
    Sugar.extend();
    var retVal;

    if(/^-?\d+$/.test(timestamp)){
       retVal = Date.create(parseInt(timestamp)*1000);
    }
    else{
      retVal = Date.create(timestamp);
    }

    return retVal;
  }
  
  
}
