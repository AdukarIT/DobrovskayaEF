/*Урок 2.

Task 1. Получить два числа (через prompt), вывести в консоль большее из них.

let numberBiggest = +prompt("Введите число");
let numberBiggestOneMore = +prompt("Введите число");

if (numberBiggest > numberBiggestOneMore) {
    console.log(numberBiggest);
} else {
    console.log(numberBiggestOneMore);
}

Task 2. Получить два числа, вывести в консоль знак их произведения.

let numbersSign = +prompt("Введите число");
let numbersSingOneMore = +prompt("Введите число");

if (numbersSign * numbersSingOneMore > 0) {
    console.log("+");
} else {
    console.log("-");
}

Task 3. Получить три числа, вывести их в консоль в порядке возрастания.

let numberFirst = +prompt("Введите число");
let numberSecond = +prompt("Введите число");
let numberThird = +prompt("Введите число");
let exchange;

if (numberFirst > numberSecond) {
    exchange = numberSecond;
    numberSecond = numberFirst;
    numberFirst = exchange;
}

if (numberSecond > numberThird) { 
    exchange = numberThird;
    numberThird = numberSecond;
    numberSecond = exchange;
}
console.log(numberFirst, numberSecond, numberThird);

Task 4. Переписать задачу 1, заменив if на тернарный оператор.

let numberBiggest = +prompt("Введите число");
let numberBiggestOneMore = +prompt("Введите число");

(numberBiggest > numberBiggestOneMore) ? console.log(numberBiggest) : console.log(numberBiggestOneMore);

Task 5. Получить число. Используя switch, вывести в консоль сообщение: для чисел от 1 до 5 – разные, для остальных – одинаковое.

let numbersFromOneToFive = +prompt("Введите число");

switch (numbersFromOneToFive) {
    case 1:
    console.log(1);
    break;
    case 2:
    console.log(2);
    break;
    case 3:
    console.log(3);
    break;
    case 4:
    console.log(4);
    break;
    case 5:
    console.log(5);
    break;
    default:
    console.log("Введенное число меньше 1 и больше 5");
}

Task 1.1. Вывести в консоль все простые числа от 2 до x.

let simpleNumbers = +prompt("Введите число");
let k;

for (i = 2; i <= 10; i++) {
    k = i - 1;
while (k >= 2) {
    if (i % k == 0) {
        break;
    } else {
        k--;
    }
}
if (k < 2) {
console.log(i);
}
}

Task 1.2. Вывести в консоль все чётные числа от x до 0 (в порядке убывания).

let simpleNumbers = +prompt("Введите число");

for (; simpleNumbers >= 0; simpleNumbers--) {
    if (simpleNumbers % 2 == 0) {
        console.log(simpleNumbers);
    }
  }
        
Task 1.3. Вывести в консоль все чётные числа от x до 0 (в порядке убывания).

let simpleNumbers = +prompt("Введите число");

while (simpleNumbers >= 0) {
    if (simpleNumbers % 2 == 0) {
        console.log(simpleNumbers);
    }
    simpleNumbers--;
  }

Урок 3.

Task 1. Напишите функцию, которая получает три числа и возвращает их сумму.

let d;

function threeNumbers(a, b, c) {
    let d = a + b + c;
    return d;
}
console.log(threeNumbers(a,b,c));

Task 2. Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.

function totalSumm (x) {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(totalSumm(x));

Task 3. Напишите функцию, которая подсчитывает сумму цифр числа.

let a;

function summOfNumbers(x) {
  let  a = 0;
  while (x != 0) {
    a = a + x % 10;
    x = Math.floor(x / 10);
  }
  return a;
}
console.log(summOfNumbers(x));

Task 4. Напишите функцию, которая считает факториал числа.

function factorial (n) {
    if (n == 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}
console.log(factorial(n));*/
    


