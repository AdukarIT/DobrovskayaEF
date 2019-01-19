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

let twentyTimesTable = +prompt("Введите число от 1 до 20");
for (let i = 1; i <= 10; i++) {
	if (twentyTimesTable > 0 && twentyTimesTable <=20) {
	console.log(twentyTimesTable + "x" + i + "=" + twentyTimesTable * i);
}
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
