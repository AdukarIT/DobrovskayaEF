/*
Task 1.

let find = document.getElementById("elem");
elem.classList.add("www");


Task 2.

let find = document.getElementById("elem"); 
elem.classList.toggle("www"); 
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

function wrapInParagraph() {
	let wrapper = document.createElement("p");
	let div = document.getElementById("block");
	let divText = div.firstChild;
	div.insertBefore(wrapper, divText);
	wrapper.appendChild(divText);
}

wrapInParagraph();
console.log(document.getElementById("block"));
*/




