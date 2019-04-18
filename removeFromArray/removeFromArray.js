const removeFromArray = function() {
    let result = [...arguments[0]];
    for (var i = 1; i < arguments.length; i++) {
       result = result.filter(function(value,index,result) {
        return value != arguments[i];
      });
    }
    return result;
}

module.exports = removeFromArray
