'use strict';

function randomInteger(min = -100, max = 100) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('Введите целочисленные границы интервала!');
  }
  if (min >= max) {
    throw new Error('Некорректные аргументы!');
  }

  return Math.floor((max - min) * Math.random()) + min;
}

function mathOperation(a, b, op) {
  let result;

  switch (op) {
    case 'addition':
      result = a + b;
      break;
    case 'subtraction':
      result = a - b;
      break;
    case 'division':
      result = a / b;
      break;
    case 'multiplication':
      result = a * b;
      break;
    default:
      throw new Error('Неверная математическая операция');
  }

  return result;
}

let result;
let a = randomInteger(0, 15);
let b = randomInteger();

console.log(`a = ${a}`);
console.log(`b = ${b}`);

if (a >= 0 && b >= 0) {
  result = 'a - b = ' + mathOperation(a, b, 'subtraction')
} else if (a < 0 && b < 0) {
  result = 'a * b = ' + mathOperation(a, b, 'multiplication')
} else if (Math.sign(a) !== Math.sign(b)) {
  result = 'a + b = ' + mathOperation(a, b, 'addition')
}

console.log(result);
