'use strict';

// 1. Написать функцию, преобразующую число в объект.
function convertNumberToObject() {
  const obj = {};
  const map = {
    0: 'units',
    1: 'dozens',
    2: 'hundreds',
  };

  let number = getNumber();

  if (number) {
    let digits = [];

    while (number) {
      digits.push(number % 10);
      number = Math.floor(number/10);
    }
    for (const key in digits) {
      obj[map[key]] = digits[key];
    }
  }

  console.log(obj);
}

// Returns integer from a range [0, 999]
function getNumber() {
  while (true) {
    const message = 'Введите число в интервале от 0 до 999.';
    const number = parseInt(prompt(message));

    if (number >= 0 && number <= 999) {
      return number;
    }
    else {
      alert(message);
      continue;
    }
    // else {
    //   alert(`Число не должно превышать 999!`);
    //   return false
    // }
  }
}
