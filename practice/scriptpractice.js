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
console.log(factorial(n));


Урок 6. 

Task 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите в консоль элемент с ключом 'c' двумя способами: через квадратные скобки и через точку. Затем выведите все свойства объекта через цикл for..in.

let obj = {
	a: 1,
	b: 2,
	c: 3
}

console.log(obj.c);

console.log(obj["c"]);

for (let prop in obj) {
	console.log(obj[prop]);
}


Task 2. Создайте объект city, добавьте ему свойства name (название города, строка) и population (население, число).

let city = {
	name: "Минск",
	population: 2000000
}

let city1 = {
	name: "Брест",
	population: 1000000
};

let city2 = {
	name: "Витебк",
	population: 1500000
};

let city3 = {
	name: "Гомель",
	population: 2000000
};
let city4 = {
	name: "Гродно",
	population: 1000000
};
let city5 = {
	name: "Могилев",
	population: 2000000
};

function getInfo() {
	return "Город " + this.name + ", население -" + this.population; 
}


Task 3. Создайте массив из шести объектов такого же вида, как city из задачи 2 – по одному для каждого областного города Беларуси.

let cities = [city, city1, city2, city3, city4, city5];
for (i = 0; i < cities.length; i++) {
	cities[i].getInfo = getInfo;
}
console.log(cities);

Task 4. Напишите функцию, которая принимает массив из задачи 3 в качестве параметра и выводит в консоль информацию о каждом городе.

function all(cities) {
	for (let i = 0; i < cities.length; i++) {
		console.log("name " + cities[i].name);
}
}
all(cities);

Task 6. Создайте в объектах с городами из задачи 3 метод getInfo, который возвращает строку с информацией о городе (например, в таком формате: "Город Добруш, население – 18760 человек").

let city = {
	name: "Минск",
	population: 2000000
}

let city1 = {
	name: "Брест",
	population: 1000000
};

let city2 = {
	name: "Витебк",
	population: 1500000
};

let city3 = {
	name: "Гомель",
	population: 2000000
};
let city4 = {
	name: "Гродно",
	population: 1000000
};
let city5 = {
	name: "Могилев",
	population: 2000000
};

let cities = [city, city1, city2, city3, city4, city5];
for (i = 0; i < cities.length; i++) {
	cities[i].getInfo = getInfo;
}
console.log(cities);


function getInfo() {
	return "Город " + this.name + ", население -" + this.population; 
}
console.log(city2.getInfo());

Task 7. Создайте объект с информацией о себе (имя, фамилия, любимое занятие). Добавьте в него метод, который выводит эту информацию в консоль в удобочитаемом формате.

let aboutMyself = {
	name: "Елена",
	surname: "Добровская",
	hobby: "Чтение"
	};
	aboutMyself.information = function() {
		console.log("Имя: " + this.name + "." + " Фамилия: " + this.surname + "." + " Увлечение: " + this.hobby);
        }
aboutMyself.information();*/


