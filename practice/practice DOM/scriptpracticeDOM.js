/*
Task 1. Все элементы label внутри таблицы. Должно быть 3 элемента.

let tableElem = document.getElementById("age-table");
let elements = tableElem.getElementsByTagName("label");
for (let i = 0; i < elements.length; i++) {
	let label = elements[i];
	console.log(label);
}

// или

document.getElementById("age-table").getElementsByTagName("label");


Task 2. Первую ячейку таблицы (со словом "Возраст").

document.getElementById("age-table").getElementsByTagName("td")[0];

// или

let result = document.querySelector("#age-table td");


Task 3. Вторую форму в документе.

document.getElementsByTagName("form")[1];


Task 4. Форму с именем search, без использования её позиции в документе.

document.querySelector('form[name="search"]');


Task 5. Элемент input в форме с именем search. Если их несколько, то нужен первый.

document.querySelector('form[name="search"] input');


Task 6. Элемент с именем info[0], без точного знания его позиции в документе.

document.getElementsByName("info[0]")[0];


Task 7. Элемент с именем info[0], внутри формы с именем search-person.

document.querySelector('form[name="search-person"] [name="info[0]"]');
*/
