/*

Task 1.

let numberOne = +prompt("Введите число");
  let numberTwo = +prompt("Введите число");
    let numberThree = +prompt("Введите число");
    function returnLowest (numberOne, numberTwo, numberThree) {
    	if (numberOne < numberTwo && numberOne < numberThree) {
    	return numberOne;
    } if (numberTwo < numberOne && numberTwo < numberThree) {
    	return numberTwo;
    } if (numberThree < numberOne && numberThree < numberTwo) {
    	return numberThree;
    	}
    }
    console.log(returnLowest(numberOne, numberTwo, numberThree));

Task 2.

let numberOfDays = +prompt("Введите количество дней");
  let numberOfHours = +prompt("Введите количество часов");
    let numberOfMinutes = +prompt("Введите количество минут");
    function nubmberOfSeconds (numberOfDays, numberOfHours, numberOfMinutes) {
    	let a = numberOfDays * 86400;
    	let b = numberOfHours * 3600;
    	let c = numberOfMinutes * 60;
    	return a + b + c;
    }

    console.log(nubmberOfSeconds(numberOfDays, numberOfHours, numberOfMinutes));

Task 3.

let a;

function factorial (a) {
    if (a < 0) {
    	return false;
    } else if (a == 0 || a == 1) {
    	return 1;
    } else if (a > 1) {
    	return a * factorial (a - 1);			
	}
}
	console.log(factorial(a));

Task 4.

let a = "";
function numberReverse (n) {
if (n < 10) {
            return n;
        }
        else {
            console.log (Math.floor(n % 10));
            return numberReverse (Math.floor(n / 10));
        }
    }
    console.log(numberReverse(1234));

Task 5.

function numbersOfRoot(a, b, c) {
let d = b * b - 4 * a * c;
if (d > 0) {
    let x;
    let y;
    x = (-b - Math.sqrt(d)) / (2 * a);
    y = (-b + Math.sqrt(d)) / (2 * a);
    return "2 корня";
} else if (d == 0) {
    let z;
    z = -b / (2 * a);
    return "1 корень";
} else {
    return "Корней нет";
}
}
console.log(numbersOfRoot(a, b, c));*/