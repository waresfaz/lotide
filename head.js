const assertEqual = require('./assertEqual');


const head = function(anArray) {
  for (let i = 0; i < anArray.length; i++) {
    return anArray[0];
  }
}

module.exports = head;