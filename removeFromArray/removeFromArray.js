const removeFromArray = function(...args) {
  let result = args[0];
  return result.filter(val => !args.includes(val));
}

module.exports = removeFromArray
