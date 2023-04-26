const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  // FIRST ATTEMPT
    // let sumNum = 0

    // num.forEach(sum => {
    //   sumNum += sum
    // });

    // return sumNum;

  return num.reduce((sum, number) => sum + number, 0)
};

const multiply = function(num) {
  // FIRST ATTEMPT
    // let multNum = 1
    // num.forEach(mult => {
    //   multNum *= mult
    // });
    // return multNum;

  return num.reduce((product, number) => product *= number, 1)
};

const power = function(num, numIndex) {
  // FIRST ATTEMPT
  let pwrNum = num
  for (let i = 1; i < numIndex; i++) {
    pwrNum *= num  
  }
  return pwrNum;

// bruh
  // return Math.pow(num, numIndex);
};

const factorial = function(num) {
	let factorialNum = 1

  for (let i = 1; i <= num; i++) {
    factorialNum *= i    
  }

  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
