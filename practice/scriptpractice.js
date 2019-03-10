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
aboutMyself.information();

Урок 7.

Task 1. Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов, каждый из которых – случайное число от 1 до 50.

function getRandomArray(len) {
    let array = [];
    for (let i = 0; i < len; i++) {
        array[i] = Math.floor(Math.random() * 50);  
    } return array;
} 
console.log(getRandomArray(20));


Task 2. Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива, минимальное и максимальное значения элементов.

function getRandomArray(len, min, max) {
    let array = [];
    for (let i = 0 && i >= min; i < len; i++) {
        array[i] = Math.floor(Math.random() * max);  
    } return array;
}
console.log(getRandomArray(10, 0, 10));


Task 3. Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html. Если оба условия выполнены, функция возвращает true, в ином случае – false.

function startEnd() {
 let str = "https://.html"
 let start = "https://";
 let end = ".html";
  if ((str.substring(0, start.length) == start) && (str.substring(str.length - end.length, str.length) == end)) {
    return true;
  }
  else {
    return false;
 }
}
console.log(startEnd());


Task 4. Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.

function count(str, symb) {
    let sum = 0;
    let index = 0;
    if (!symb) {
        return 0;
    }
    while ((index = str.indexOf(symb)) >= 0) {
        str = str.substring(index + symb.length);
        sum++;
    }
    return sum;
}

 console.log(count("jsadffFFFFFffgflak", "f"));


Task 5. Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом (например, 'A' == 'a').

function count(str, symb) {
    let sum = 0;
    let index = 0;
    if (!symb) {
        return 0;
    }
    while ((index = str.indexOf(symb)) >= 0) {
        str = str.substring(index + symb.length);
        sum++;
    }
    return sum;
}

 console.log(count("jsadffFFFFFffgflak".toLowerCase(), "f"));


Task 6. Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».

function getData() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    switch (month) {
        case 0: 
        month = "января";
        break;
        case 1:
        month = "февраля";
        break;
        case 2:
        month = "марта";
        break;
        case 3:
        month = "апреля";
        break;
        case 4: 
        month = "мая";
        break;
        case 5:
        month = "июня";
        break;
        case 6:
        month = "июля";
        break;
        case 7:
        month = "августа";
        break;
        case 8:
        month = "сентября";
        break;
        case 9:
        month = "октября";
        break;
        case 10:
        month = "ноября";
        break;
        case 11: 
        month = "декабря";
        break;
        default:
        break;
    }
    console.log(day + " " + month + " " + year);
}
getData();


Task 7. Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.

function secondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let difference = now - today;
  return Math.floor(difference / 1000);
}
console.log(secondsToday());


Task 8. Напишите функцию, которая принимает от пользователя строку. Если эта строка не содержит буквы «ф», сгенерируйте собственную ошибку. Вызовите функцию так, чтобы при возникновении «поймать» ошибку в try/catch. 

function message(symb) {
    let str = prompt("Введите данные");
    if (!(str.indexOf(symb) !== -1)) {
        throw new Error ("Нет такого символа");
    }
    try {
        if (str.indexOf(symb) !== -1) {
            console.log("Есть такой символ"); 
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
message("ф");

Урок 8. Напишите функцию counterFactory(start, step), которая при вызове возвращает другую функцию – счётчик tictoc(). start – стартовое значение счётчика, step – его шаг. При каждом вызове tictoc увеличивает значение счётчика на step.


Task 1.

function counterFactory(start, step) {
    let count = 0;
    count = start;
    return function tictoc() {
        count = count + step;
        return count;
    }
    return tictoc;
}

let newCount = counterFactory(1, 5);

console.log(newCount()); // 6
console.log(newCount()); // 11
console.log(newCount()); // 16


Task 2. Напишите функцию take(tictoc, x), которая вызывает функцию tictoc заданное число (x) раз и возвращает массив с результатами вызовов.

function take(func, x) {
    let array = [].slice.call(func);
    for (let i = 0; i < x; i++) {
        array.push(newCount());
    } return array;
}
console.log(take(counterFactory(), 5));

Task 3. Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.

function task(str) {
    let a = str.trim().split(" ");
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].replace(",", " ");
        a[i] = a[i].replace(".", " ");
        a[i] = a[i].replace(" ", "");
    } console.log(a);
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].split("").reverse().join("");
    } console.log(a);
    a.sort(function (a, b) {
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
        return 0;
    });
    console.log(a);
    let symbol = "с";
    let result = str.split('').filter(function(n){
        if (!(symbol.indexOf(n))) {
            return symbol;
        }
    });
    console.log(result.length);
}
task("Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.");


Task 4.

Дан код:
let obj = { greeting: "Привет" };
function func(surname, name) {
alert(this.greeting + ', ' + surname + ' ' + name);
}
func();  // тут должно вывести 'привет, Иванов Иван'
Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'Привет, Иванов Иван'. Слово 'привет' возьмите из свойства объекта obj, а 'Иванов' и 'Иван' задайте как параметры функциями.

let obj = { greeting: "Привет" };
function func(surname, name) {
alert(obj.greeting + ', ' + surname + ' ' + name);
}
func.call(obj, "Иванов", "Иван");


Task 5. Перепишите задачу так, чтобы вместо call применялся apply.

let obj = { greeting: "Привет" };
function func(surname, name) {
alert(obj.greeting + ', ' + surname + ' ' + name);
}
func.apply(obj, new Array("Иванов", "Иван"));
*/
