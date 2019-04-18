const reverseString = function(string) {
  let arr = string.split("");
  let result = "";
  for (var i = arr.length - 1; i >=0 ; i--) {
    result += arr[i];
  }
  return result;
}

module.exports = reverseString
