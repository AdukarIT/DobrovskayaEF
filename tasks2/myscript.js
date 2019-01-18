    /*

Task 1.

    let input = +prompt("Введите номер квартиры");
    if (input <= 0 || input > 100) {
    	console.log("Неверный номер квартиры!");
    	alert("Неверный номер квартиры!");
    } else if (input >= 1 && input <=20) {
    	console.log(1);
    } else if (input >= 21 && input <=40) {
    	console.log(2);
    } else if (input >= 41 && input <=60) {
    	console.log(3);
    }
    else if (input >= 61 && input <=80) {
    	console.log(4);
    }
    else if (input >= 81 && input <=100) {
    	console.log(5);
    }

Task 2.

let input = prompt("Введите марку автомобиля");
switch (input) {
    case "BMW":
    case "bmw":
    case "Bmw":
    console.log(input + "\nGermany");
    break;
    case "TOYOTA":
    case "toyota":
    case "Toyota":
    console.log(input + "\nJapan");
    break;
    case "FORD":
    case "ford":
    case "Ford":
    console.log(input + "\nUnited States of America");
    break;
    case "PEUGEOT":
    case "peugeot":
    case "Peugeot":
    console.log(input + "\nFrance");
    break;
    case "MAZDA":
    case "mazda":
    case "Mazda":
    console.log(input + "\nJapan");
    break;
    case "VOLKSWAGEN":
    case "volkswagen":
    case "Volkswagen":
    console.log(input + "\nGermany");
    break;
    case "VOLVO":
    case "volvo":
    case "Volvo":
    console.log(input + "\nSweden");
    break;
    default:
    console.log("some_input - страна происхождения неизвестна");
}

Task 3.

let x = 4;
let input = prompt("Введите номер года");
if (input <= 0) {
        console.log("Год указан неверно");
} else if ((input % x) == 0) {
    console.log("Это високосный год");
} else {
    console.log("Это не високосный год");
    }

Task 4.

let a1 = 1;
let a2 = 2;
let a3 = 3;
let a4 = 4;
let a5 = 5;
let a6 = 6;
let a7 = 7;
let a8 = 8;
let a9 = 9;
let a10 = 10;

let input = +prompt("Введите число от 1 до 10");
if (input > 0 && input <=20) {
    console.log(input + "x" + a1 + "=" + input * a1);
    console.log(input + "x" + a2 + "=" + input * a2);
    console.log(input + "x" + a3 + "=" + input * a3);
    console.log(input + "x" + a4 + "=" + input * a4);
    console.log(input + "x" + a5 + "=" + input * a5);
    console.log(input + "x" + a6 + "=" + input * a6);
    console.log(input + "x" + a7 + "=" + input * a7);
    console.log(input + "x" + a8 + "=" + input * a8);
    console.log(input + "x" + a9 + "=" + input * a9);
    console.log(input + "x" + a10 + "=" + input * a10);
}

Task 5.

let totalSumm = 0;

for (x = 0; x <=50; x++) {
    if (x % 2 == 0) continue;
    totalSumm = totalSumm + x;
}
console.log(totalSumm);

Task 6.

let a = 0;
let b = 1;

console.log(a);
console.log(b);
for (i = 3; i <= 15; i++) {
    let d = a + b;
    a = b;
    b = d;
    console.log(b);
}

Task 7.

let a = " ";
let b = "#";
let x = a + b;

for (let c = 0; c <= 7; c++) {
    for (let d = 0; d <= 2; d++) {
        x += x;
    }
    console.log(x);
     if (c % 2 !== 0) {
        x = a + b;
}
    else {
        x = b + a;
  }
}*/