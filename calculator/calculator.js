function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (arr) {
	return arr.reduce((accumlator,currentValue) =>  accumlator + currentValue ,0)
}

function multiply (arr) {
	return arr.reduce((accumlator,currentValue) => accumlator * currentValue,1)
}

function power(a,b) {
	return Math.pow(a,b)
}

function factorial(a) {
  let result = 1;
	if (a > 0) {
    for(let curser = 1;curser <= a;curser++) {
        result *= curser;
    }
  }
  return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}