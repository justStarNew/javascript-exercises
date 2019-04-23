const getTheTitles = function(arr) {
      return arr.reduce((result,current) => [...result,current.title],[])
}

module.exports = getTheTitles;
