/*Task 1.

    let flatNumbers = +prompt("Введите номер квартиры");
    if (flatNumbers < 1 || flatNumbers > 100) {
        console.log("Неверный номер квартиры!");
        alert("Неверный номер квартиры!");
    } else if (flatNumbers >= 1 && flatNumbers <=20) {
        console.log(1);
    } else if (flatNumbers >= 21 && flatNumbers <=40) {
        console.log(2);
    } else if (flatNumbers >= 41 && flatNumbers <=60) {
        console.log(3);
    }
    else if (flatNumbers >= 61 && flatNumbers <=80) {
        console.log(4);
    }
    else if (flatNumbers >= 81 && flatNumbers <=100) {
        console.log(5);
    }

Task 2.

let autoCountries = prompt("Введите марку автомобиля");
switch (autoCountries) {
    case "BMW":
    case "bmw":
    case "Bmw":
    console.log(autoCountries + "\nGermany");
    break;
    case "TOYOTA":
    case "toyota":
    case "Toyota":
    console.log(autoCountries + "\nJapan");
    break;
    case "FORD":
    case "ford":
    case "Ford":
    console.log(autoCountries + "\nUnited States of America");
    break;
    case "PEUGEOT":
    case "peugeot":
    case "Peugeot":
    console.log(autoCountries + "\nFrance");
    break;
    case "MAZDA":
    case "mazda":
    case "Mazda":
    console.log(autoCountries + "\nJapan");
    break;
    case "VOLKSWAGEN":
    case "volkswagen":
    case "Volkswagen":
    console.log(autoCountries + "\nGermany");
    break;
    case "VOLVO":
    case "volvo":
    case "Volvo":
    console.log(autoCountries + "\nSweden");
    break;
    default:
    console.log(autoCountries + "\nСтрана происхождения неизвестна");
}

Task 3.

let leapYearOrNo = prompt("Введите номер года");
if (leapYearOrNo <= 0) {
        console.log("Год указан неверно");
} else if (leapYearOrNo % 4 == 0 && leapYearOrNo % 100 != 0 || leapYearOrNo % 400 == 0) {
    console.log("Это високосный год");
} else {
    console.log("Это не високосный год");
}

Task 4.

let twentyTimesTable = +prompt("Введите число от 1 до 20");

for (let i = 1; i <= 10; i++) {
    if (twentyTimesTable > 0 && twentyTimesTable <=20) {
    console.log(twentyTimesTable + "x" + i + "=" + twentyTimesTable * i);
} else {
    console.log("Введенное число меньше 1 или больше 20");
}
}

Task 5.

let totalSumm = 0;
for (let x = 1; x <=50; x++) {
    if (x % 2 == 0) continue;
    totalSumm = totalSumm + x;
}
console.log(totalSumm);

Task 6.

let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= 15; i++) {
    let d = a + b;
    a = b;
    b = d;
    console.log(b);
}

Task 7.

for (let i = 1; i <= 8; i++) {
    let str = "";
    for (let j = 1; j <= 8; j++) {
        if ((i + j) % 2) {
        str += "#";
    } else {
        str += " ";
    }
}
console.log(str);
}*/
