'use strict';

let degC = prompt('Введите температуру в градусах Цельсия');
alert(`${degC} градусов Цельсия = ${celsiusToFahrenheit(degC)} градусов Фаренгейта.`);

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (9 / 5) * celsius + 32;
  return fahrenheit;
}


