let findTheOldest = function(people) {
      return people.reduce((result,curr) => {
        //result save the oldest people
          let age1 = Number(result.yearOfDeath?result.yearOfDeath:new Date().getFullYear()) - Number(result.yearOfBirth);
          let age2 = Number(curr.yearOfDeath?curr.yearOfDeath:new Date().getFullYear()) - Number(curr.yearOfBirth);
          if(age1 > age2) {
              return result;
          } else {
            return curr;
          }
      })
}

module.exports = findTheOldest
