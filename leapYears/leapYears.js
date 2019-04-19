const leapYears = function(year) {
    let result = false;
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      result = true;
    }
    return result;
}

module.exports = leapYears
