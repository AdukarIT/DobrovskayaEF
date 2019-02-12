/*
Task 1.

function getRandomArray(len, min, max) {
    let array = [];
    for (let i = 0 && i >= min; i < len; i++) {
        array[i] = Math.floor(Math.random() * max);  
    } return array;
}
function newArray(array) {
	for (let i = 0; i < array.length; i++) {
    array[i] = {
      initial: array[i],
      sqrt: Math.sqrt(array[i]),
      floor: Math.round(array[i]) === Math.floor(array[i]),
      ceil: Math.round(array[i]) === Math.ceil(array[i])
    }
  }
  return array;
}
console.log(newArray(getRandomArray(10, 0, 10)));


Task 2.

function getRandomArray(len, min, max) {
    let array = [];
    for (let i = 0 && i >= min; i < len; i++) {
        array[i] = Math.floor(Math.random() * max);  
    } return array;
}
function newArray(array) {
	for (let i = 0; i < array.length; i++) {
    array[i] = {
      initial: array[i],
      sqrt: Math.sqrt(array[i]),
      sqrt1: Math.round(Math.sqrt(array[i]) * 100) / 100,
      floor: Math.round(array[i]) === Math.floor(array[i]),
      ceil: Math.round(array[i]) === Math.ceil(array[i])
    }
  }
  return array;
}
console.log(newArray(getRandomArray(10, 0, 10)));


Task 3.

function palindrome(str) {
	let result = str.split(' ').join('');
    for (let i = 0; i < result.length / 2; i++) {
        if (result.charAt(i) !== result.charAt(result.length - 1 - i)) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("Палиндроморднилап".toLowerCase()));


Task 4.

function doubleSymbol(str) {
let double = "";
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== str.indexOf(str[i])) {
      double += str[i];
    }
  } return double;
}
console.log(doubleSymbol("Галактика".toLowerCase()));


Task 5.

function change(str, search, replace) {
	while( str.indexOf(search) > -1) {
		str = str.replace(search, replace);
	}
	return str;
}
console.log(change("Галактика", "ка", "ческий"));

Task 6.

function firstUpper(str){
	let res = "";
	for (let i = 0; i < str.length; i++) {
		if (i == 0 || str.charAt(i) !== " " && str.charAt(i - 1) == " ") {
			res += str[i].toUpperCase();
		} else {
			res += str.charAt(i);
		}
 }
 return res;
}
console.log(firstUpper("все слова с большой буквы"));

/* альтернатива
function firstUpper(str) {
	return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(firstUpper("все слова с большой буквы"));
*/
/*
Task 7.

function changeStar(str) {
	for (let i = 0; i < str.length - 1; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j] && str[j] != "*" && str[j] != " ") {
				str = str.slice(0, j) + "*" + str.slice(j + 1, str.length);
			}
		}
	}
	return str;
}
console.log(changeStar("я учусь программированию"));


Task 8.

function getData() {
    let d = new Date();
    let day = d.getDay();
    switch (day) {
        case 0: 
        day = "понедельник";
        break;
        case 1:
        day = "вторник";
        break;
        case 2:
        day = "среда";
        break;
        case 3:
        day = "четверг";
        break;
        case 4: 
        day = "пятница";
        break;
        case 5:
        day = "суббота";
        break;
        case 6:
        day = "воскресенье";
        break;
        default:
        break;
    }
    console.log(day);
}
getData();


Task 9.

function whatADay() {
	let userDate = prompt("Введите дату dd-mm-yyyy");
	let getDate = new Date(+userDate.slice(6, 10), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));
    let day = getDate.getDay();
    switch (day) {
        case 0: 
        day = "понедельник";
        break;
        case 1:
        day = "вторник";
        break;
        case 2:
        day = "среда";
        break;
        case 3:
        day = "четверг";
        break;
        case 4: 
        day = "пятница";
        break;
        case 5:
        day = "суббота";
        break;
        case 6:
        day = "воскресенье";
        break;
        default:
        break;
    }
    console.log(day);
}
whatADay();


Task 10.

function whatADay() {
	let userDate = prompt("Введите дату dd-mm-yyyy");
	let first = new Date(+userDate.slice(6, 10), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));
	let second = new Date();
	var third = new Date(second.getFullYear(), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));
	let before = Math.round((third - second) / 1000 / 60 / 60 / 24);
	console.log(before + " дней до ближайшего дня рождения");
	let celebration = Math.round((second - first) / 1000 / 3600 / 24 / 365);
	let a = Math.round(100 - celebration);
	console.log(a + " лет всего-то осталось до Вашего 100-летнего юбилея!");
}
whatADay();


Task 11.

function sqrt(n) {
	try {
		if (Math.sqrt(n) == Math.round(Math.sqrt(n))) {
			console.log(Math.sqrt(n));
		} else {
			throw new Error("Из "+ n + " нет корней");
		}
	} catch (e) {
		console.log(e.message);
	}
}
sqrt();

function getRandomArray(len, min, max) {
    let array = [];
    for (let i = 0 && i >= min; i < len; i++) {
        array[i] = Math.floor(Math.random() * max);  
    } console.log(array);
    for (let i = 0; i < array.length; i++) {
    	array[i] = sqrt(array[i]);
    }
}
getRandomArray(8, 1, 8);
*/
