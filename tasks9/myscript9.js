/*
Task 1.

function create() {
	let parent = document.getElementsByTagName("BODY")[0];
	let firstDiv = document.createElement("div");
	firstDiv.classList.add("www");
	firstDiv.style.width = "100px";
    firstDiv.style.height = "100px";
    firstDiv.style.background = "yellow";
    let text = "текст";
    let textNode = document.createTextNode(text);
    firstDiv.appendChild(textNode);
    parent.appendChild(firstDiv);
}
create();

let find = document.getElementsByClassName("www");
console.log(find);
/*

Task 2.

function create() {
	let parent = document.getElementsByTagName("BODY")[0];
	let firstDiv = document.createElement("div");
	firstDiv.classList.add("www");
	firstDiv.style.width = "100px";
    firstDiv.style.height = "100px";
    firstDiv.style.background = "yellow";
    parent.appendChild(firstDiv);
    firstDiv.classList.toggle("www");
}
create();

let find = document.getElementsByClassName("www");
console.log(find);


Task 3.

function recursiveSearchTags(docs, tagName) {
	let takeBack = docs.getElementsByTagName(tagName);
	console.log([].slice.call(takeBack));
}
recursiveSearchTags(document, "div");


Task 4.

function create1() {
	let parent1 = document.getElementsByTagName("BODY")[0];
	let firstUl = document.createElement("ul");
    parent1.appendChild(firstUl);
}
create1();

let list = document.querySelector("ul"); 
let array = ["март", "апрель", "май"];
for(let i = 0; i < array.length; i++) { 
let listApp = document.createElement("li");
if (!(i % 2 == 0)) {
listApp.style.background = "red";
}
listApp.innerHTML = array[i]; 
list.appendChild(listApp);
}

console.log(list);


Task 5.

let before = document.querySelector("ul"); 
before.previousElementSibling.innerHTML += "!";


Task 6.
*/




