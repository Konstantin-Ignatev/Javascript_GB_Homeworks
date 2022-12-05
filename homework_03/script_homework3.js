/*Задание 1*/

const thirdNum = number => number * number * number;

console.log(thirdNum(2));
console.log(thirdNum(3));

/*Задание 2*/

// const salary = (money) => {
//     money = money * 0.87;
//     return money;
// }

// const userMoney = Number(prompt('Сколько ты зарабатываешь в месяц?'));

// let moneyMonth = salary(userMoney);

// if (isNaN(moneyMonth)) {
//     alert("Значение задано неверно");
// } else {
//     console.log(`Размер заработной платы за вычетом налогов равен ${moneyMonth}`);
// }

/*Задание 3*/

// let num1 = +prompt("Введите первое число");
// let num2 = +prompt("PВведите второе число");
// let num3 = +prompt("Введите третье число");

// getMax(num1, num2, num3);

// function getMax(num1, num2, num3) {
//     console.log(Math.max(num1, num2, num3));
// }

/*Задание 4*/

/*Функция сложения двух чисел*/

// function sum(a, b) {
//     return a + b;
// }

/*Функция разности двух чисел*/

// function diff(a, b) {
//     if (a > b) {
//         return a - b;
//     }
//     return b - a;
// }

/*Функция умножения двух чисел*/

// function mul(a, b) {
//     return a * b;
// }

/*Функция деления двух чисел*/

// function div(a, b) {
//     return a / b;
// }

// const numberA = +prompt(`Введите число А: `);
// const numberB = +prompt(`Введите число B: `);
// alert(`Сумма числел А и В: ${sum(numberA, numberB)}`);
// alert(`Разность числел А и В: ${diff(numberA, numberB)}`);
// alert(`Произведение числел А и В: ${mul(numberA, numberB)}`);
// alert(`Деление числел А и В: ${div(numberA, numberB)}`);