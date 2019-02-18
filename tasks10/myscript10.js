/*
Task 1.

function create() {
	let parent = document.getElementsByTagName("BODY")[0];
	let firstDiv = document.createElement("div");
	firstDiv.classList.add("www");
    let text = "текст";
    let textNode = document.createTextNode(text);
    let input = document.createElement("input");
    input.style.width = "100px";
    input.style.height = "20px";
    let button = document.createElement("button");
    button.style.width = "50px";
    button.style.height = "20px";
    button.style.background = "yellow";
    let buttonText = "Clone";
    let buttonTextNode = document.createTextNode(buttonText);
    firstDiv.appendChild(textNode);
    parent.appendChild(firstDiv);
    parent.appendChild(input);
    parent.appendChild(button);
    button.appendChild(buttonTextNode);
}
create();

parent = document.querySelector("div");
input = document.querySelector("input"); 
button = document.querySelector("button"); 

button.addEventListener("click", clone); 

function clone() { 
	let cloneButton = input.cloneNode(true);
	parent.appendChild(cloneButton); 
};
*/