const sumAll = function(num1,num2) {
  let result = 0;
  if(isNaN(num2) || isNaN(num1) || num1 < 0 || num2 < 0) {
      result = "ERROR";
  } else {
      for(let i = Math.min(num1,num2);i<=Math.max(num1,num2);i++) {
          result += i;
      }
  }
  return result;
}

module.exports = sumAll
