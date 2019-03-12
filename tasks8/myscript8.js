/*
Task 1.

function task(str) {
	let symbol = String.fromCharCode(1089);
    let result = str.split('').filter(function(n){
        if (!(symbol.indexOf(n))) {
            return symbol;
        }
    });
    console.log(result.length);
}

task("Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.");


Task 2.

function task(str) {
	let symbol = String.fromCharCode(1089);
    let result = str.split('').filter(function(n){
        if (!(symbol.indexOf(n))) {
            return symbol;
        }
    });
    console.log(result);
}
task("Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.");

Task 3. 

let stateCalifornia = data.filter(
	function(item) {
	return item.state === "California" && parseInt(item.growth_from_2000_to_2013) > 0
});
console.log(stateCalifornia);

Task 4.

data.forEach(function(item) {
	if (parseInt(Math.ceil(item.latitude)) >=25 && parseInt(Math.ceil(item.latitude)) <= 30) {
		let sum = 0;
		for (let i = 1; i < data.length; i++) {
			sum = sum + parseInt(data[i].population);
		} 
		console.log(sum / 1000000 + " millions")
	}
});


Task 5.

let arr = [];
let array = data.reduce(function(a, b) {
	if (b.city[0] === "D") {
		arr.push(b);
	} return arr.sort(function(a, b) {
		b.city - a.city;
	});
});
console.log(array);


Task 6.

function massive() {
	let states = {};	
	let newObject = data.forEach(function(item) {
		if (!(states[item.state])) {
			states[item.state] = [];
			states[item.state][0] = {
				"city": item.city,
				"population": item.population,
				"rank": item.rank
			};
		} else {
			states[item.state].push({
				"city": item.city,
				"population": item.population,
				"rank": item.rank
			});
		}  
	});
	return states;
}
console.log(massive());
*/
