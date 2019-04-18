const repeatString = function(str,num) {
    let result = "";
    if (num > 0) {
      for (var i = 0; i <num;i++) {
        result += str;
      }
    } else if (num < 0) {
        result = "ERROR";
    }
    return result;
}

module.exports = repeatString
  
