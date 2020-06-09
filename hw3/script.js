'use strict';

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
const rangeLim = 100;

// Число x является простым, если оно больше 1 и при этом делится без остатка
// только на 1 и на x. Поэтому начинаем остчет с первого простого числа - 2.
let currentNumber = 2;
let primeNumbers = [];

while(currentNumber <= rangeLim) {
  if(isPrime(currentNumber)) {
    primeNumbers.push(currentNumber);
  }
  currentNumber++;
}

console.log(primeNumbers.join(', ') + '.');

function isPrime(number) {
  for (var i = 2; i <= number/2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 2-3. Реализовать функционал подсчета стоимости корзины в зависимости от
// находящихся в ней товаров.
var cart = [
  {
    productID: 1,
    name: 'Cold pressed juice',
    quantity: 1,
    price: 10,
    currency: 'USD',
  },
  {
    productID: 2,
    name: 'Mason Jar',
    quantity: 2,
    price: 8,
    currency: 'USD',
  },
  {
    productID: 3,
    name: 'Camping Mug',
    quantity: 1,
    price: 14.95,
    currency: 'USD',
  },
];

function countBasketPrice() {
  let basketPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    basketPrice += cart[i].price * cart[i].quantity;
  }

  return basketPrice;
}

console.log(cart);
console.log(countBasketPrice());

cart.push({
  productID: 4,
  name: 'Backpack',
  quantity: 1,
  price: 64.99,
  currency: 'USD',
});

console.log(cart);
console.log(countBasketPrice());

// 4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for (let i = 0; i < 10; console.log(i++)) {}

// 5. Нарисовать пирамиду с помощью console.log, у пирамиды должно быть 20 рядов
let pyramid = '';
for (let i = 1; i <= 20; i++) {
  pyramid += 'x';
  console.log(pyramid, '\n');
}
