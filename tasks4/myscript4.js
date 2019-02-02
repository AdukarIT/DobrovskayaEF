/*

Task 1. Создайте функцию, которая принимает три числа: два первых должны быть длиной сторон катетов прямоугольного треугольника, а третье – длиной гипотенузы. Функция возвращает true, если такой прямоугольный треугольник возможен, и false, если нет.

let sideOne = +prompt("Введите длину первой стороны катета прямоугольного треугольника");
let sideTwo = +prompt("Введите длину второй стороны катета прямоугольного треугольника");
let hypotenuse = +prompt("Введите длину гипотенузы прямоугольного треугольника");

function squareOfTheHypotenuse (sideOne, sideTwo, hypotenuse) {
    if (hypotenuse * hypotenuse == sideOne * sideOne + sideTwo * sideTwo) {
    return true;
    } else {
    return false;
    }
}
console.log(squareOfTheHypotenuse (sideOne, sideTwo, hypotenuse));


Task 2. Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.

function repeat(str = "", n = 2) {
    let str1 = "";
    while (n >= 1) {
        str1 = str1 + str;
        n--;
    }
    return str1;
}
console.log(repeat("Строка", 6));


Task 3. Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете. Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».

let students = prompt("Введите количество учеников");
let tables = prompt("Введите количество парт");

function enoughOrNot(students, tables) {
    if ((students / 2) > tables) {
        let a = Math.floor(students / 2 - (tables / 2));
        return "Недостаточно парт: " + a;
    } 
    if (tables > (students / 2)) {
        let b = Math.floor(tables - students / 2); 
        if (b !== 0) {
        return "Лишних парт: " + b;
    }
    if (b !== 1) {
    	return "Все в порядке";
    }

    } else {
    	return "Все в порядке";
    }
    
}

console.log(enoughOrNot(students, tables));


Task 4. Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание: https://en.wikipedia.org/wiki/Academic_grading_in_Belarus

let marks = +prompt("Введите оценку");

function mark(marks) {
switch (marks) {
    case "":
    case 0:
    return false;
    break;
    case 1:
    case 2:
    return "Unsatisfactory";
    break;
    case 3:
    case 4:
    return "Satisfactory";
    break;
    case 5:
    return "Almost good";
    break;
    case 6:
    return "Good";
    break;
    case 7:
    return "Very good";
    break;
    case 8:
    return "Almost excellent";
    case 9:
    return "Excellent";
    break;
    case 10:
    return "Brilliant";
    break;
    default:
    return "Оценка не введена";
}
}
console.log(mark(marks));


Task 5. Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.

let zero = +prompt("Введите число");

function letZero(zero) {
    do {
        zero = +prompt("Введите число");}
    while (zero != 0) 
        return zero;
}
console.log(letZero(zero));


Task 6. Перепишите функцию из задачи 3 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, выводила эту сумму в консоль, а возвращала количество введённых чисел.

function getInputSum() {
    let sum = 0;
    let count = 0;
    do {
        sum += +prompt("Введите число");
        console.log(sum);
        count++;
    } while (sum < 100);
    return count;
} 

console.log(getInputSum());


Task 7. Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.

let simpleNumbers = +prompt("Введите число");

function simpleOrNot(simpleNumbers) {
    if (simpleNumbers < 2) {
        return false;
    }
    for (let i = 2; i < simpleNumbers; i++) {
        if (simpleNumbers % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(simpleOrNot(simpleNumbers));


Task 8. Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца. Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна), к которому относится месяц. Если нет –сообщение об ошибке.

let seasons = +prompt("Введите номер месяца");

function whatSeason(seasons) {
switch (seasons) {
    case 1:
    case 2:
    case 12:
    return "Зима";
    break;
    case 3:
    case 4:
    case 5:
    return "Весна";
    break;
    case 6:
    case 7:
    case 8:
    return "Лето";
    break;
    case 9:
    case 10:
    case 11:
    return "Осень";
    break;
    default:
    return "Номер месяца не соответствует номерам месяцев";
}
}
console.log(whatSeason(seasons));


Task 9. Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).

function numbers(simpleNumbers) {
for (; simpleNumbers >= 10; simpleNumbers--) {
    if (simpleNumbers % 7 == 0 || simpleNumbers % 10 == 7) {
        console.log(simpleNumbers);
    }
  }
}
console.log(numbers(99));


Task 10. Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители, а возвращает количество делителей.
   
function numbers(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            console.log(i);
            sum++;
     }
 }
  return "Количество делителей - " + sum;
}
function numbersElse() {
 for (let i = 2; i <=20; i++) {
     console.log(numbers(i));
  }
}

console.log(numbers(20));


Task 11. Решите задачу 10 в общем виде: вместо 2 и 20 – аргументы x и y.

function numbers(x, y) {
    let sum = 0;
    for (let i = 1; i <= y; i++) {
        if (y % i == 0) {
            console.log(i);
            sum++;
     }
 }
  return "Количество делителей - " + sum;
}
function numbersElse() {
 for (let i = x; i <= y; i++) {
     console.log(numbers(i));
  }
}

console.log(numbers(2, 20));


Task 12. Создайте функцию с параметрами size (число) и unit (строка). В unit передаются единицы измерения информации («Кб», «Мб», «Гб»), в size – количество таких единиц. Функция возвращает количество байт в size.

let a = 1024;

function bites(size, unit) {
    switch (unit) {    
        case "Кб":
        return a * size;
        break;
        case "Мб":
        return a ** 2 * size;
        break;
        case "Гб":
        return a ** 3 * size;
        break;
        default:
        return "Введенные данные не соответствуют";
  }
}

console.log(bites(1, "Гб"));


Task 13. Создайте функцию, которая ищет наибольший общий делитель двух чисел.

function biggest(a, b) {
    while (!(a == b)) {
        if (a > b) {
            let c = a;
            a = b;
            b = c;
        }
        b = b - a;
    }
    return a;
}

console.log(biggest(2, 20));


Task 14. Решите задачу 13 через рекурсию.

function biggest(a, b) {
    if (a == b) {
        return a;
    }
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    return biggest(a, b - a);
}

console.log(biggest(2, 20));


Task 15. Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n, будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).

function words(n) {
    if (n % 1 !== 0) {
        return "Введенное число - не целое";
    }
    if (n > 10 && n < 20) {
    	return n + " карандашей";
    }
    if (n == 1 || n % 10 == 1) {
        return n + " карандаш";
    }
    if (n % 10 == 2 || n % 10 == 3 || n % 10 == 4) {
        return n + " карандаша";
    }
    else {
        return n + " карандашей";
    }
}

console.log(words(1));


Task 16. Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных чисел.

function square(n) {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        let a = i * i;
        let b = j * j;
        if (a + b == n) {
            return i + " во 2й степени " + "+ " + j + " во 2й степени = " + n;
        }
    }

  }
}

console.log(square(10));

*/
