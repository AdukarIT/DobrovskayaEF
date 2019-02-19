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


Task 2.

function createTable() {
table = document.getElementById("newtable"); 
table.setAttribute("border", 1);
tr = document.createElement("TR"); 
td = document.createElement("TD"); 
td.setAttribute("rowspan", 1);  
td.appendChild(document.createTextNode("1 ячейка")); 
tr.appendChild(td); 
td = document.createElement("TD"); 
td.setAttribute("colspan", 1);  
td.appendChild(document.createTextNode("2 ячейка")); 
tr.appendChild(td); 
td = document.createElement("TD"); 
table.appendChild(tr);
tr = document.createElement("TR"); 
td = document.createElement("TD"); 
td.appendChild(document.createTextNode("3 ячейка")); 
tr.appendChild(td); 
td = document.createElement("TD"); 
td.appendChild(document.createTextNode("4 ячейка")); 
tr.appendChild(td); 
table.appendChild(tr);
};
createTable();

table.addEventListener("onclick", changeByClick());

function changeByClick() {
table.onclick = function() {
	if(table.classList.contains("highlight")) {
		table.classList.replace("highlight", "bordered");
	} else if (table.classList.contains("bordered")) {
		table.classList.replace("bordered", "striped");
	} else if (table.classList.contains("striped")) {
		table.classList.replace("striped", "highlight");
	} else {table.classList.add("bordered");
}
};
}
console.log(table.classList);
console.log(table.classList);
console.log(table.classList);


Task 3.

function createTable() {
table = document.getElementById("newtable"); 
table.setAttribute("border", 1);
tr = document.createElement("TR"); 
td = document.createElement("TD"); 
td.setAttribute("rowspan", 1);  
td.appendChild(document.createTextNode("1 ячейка")); 
tr.appendChild(td); 
td = document.createElement("TD"); 
td.setAttribute("colspan", 1);  
td.appendChild(document.createTextNode("2 ячейка")); 
tr.appendChild(td); 
td = document.createElement("TD"); 
table.appendChild(tr);
tr = document.createElement("TR"); 
td = document.createElement("TD"); 
td.appendChild(document.createTextNode("3 ячейка")); 
tr.appendChild(td); 
td = document.createElement("TD"); 
td.appendChild(document.createTextNode("4 ячейка")); 
tr.appendChild(td); 
table.appendChild(tr);
};
createTable();

    let parent = document.getElementsByTagName("BODY")[0];
    let firstInput = document.createElement("input");
    firstInput.setAttribute("type", "radio");
    parent.appendChild(firstInput);
    let secondInput = document.createElement("input");
    secondInput.setAttribute("type", "radio");
    parent.appendChild(secondInput);
    let thirdInput = document.createElement("input");
    thirdInput.setAttribute("type", "radio");
    parent.appendChild(thirdInput);

firstInput.addEventListener("onclick", changeByClick()); 
secondInput.addEventListener("onclick", changeByClick()); 
thirdInput.addEventListener("onclick", changeByClick()); 

function changeByClick() {
firstInput.onclick = function() {
	if(table.classList.contains("highlight")) {
		table.classList.replace("highlight", "bordered");
	} else if (table.classList.contains("bordered")) {
		table.classList.replace("bordered", "striped");
	} else if (table.classList.contains("striped")) {
		table.classList.replace("striped", "highlight");
	} else {table.classList.add("bordered");
}
};
secondInput.onclick = function() {
	if(table.classList.contains("highlight")) {
		table.classList.replace("highlight", "bordered");
	} else if (table.classList.contains("bordered")) {
		table.classList.replace("bordered", "striped");
	} else if (table.classList.contains("striped")) {
		table.classList.replace("striped", "highlight");
	} else {
	        table.classList.add("bordered");
}
};
thirdInput.onclick = function() {
	if(table.classList.contains("highlight")) {
		table.classList.replace("highlight", "bordered");
	} else if (table.classList.contains("bordered")) {
		table.classList.replace("bordered", "striped");
	} else if (table.classList.contains("striped")) {
		table.classList.replace("striped", "highlight");
	} else {table.classList.add("bordered");
}
};
}
console.log(table.classList);
console.log(table.classList);
console.log(table.classList);


Task 4.

let parent = document.getElementsByTagName("BODY")[0];
    let buttonOn = document.createElement("button");
    buttonOn.style.width = "120px";
    buttonOn.style.height = "20px";
    buttonOn.style.background = "yellow";
    let buttonOnText = "Кнопка ON";
    let buttonOnTextNode = document.createTextNode(buttonOnText);
    parent.appendChild(buttonOn);
    buttonOn.appendChild(buttonOnTextNode);
    let buttonOff = document.createElement("button");
    buttonOff.style.width = "120px";
    buttonOff.style.height = "20px";
    buttonOff.style.background = "red";
    let buttonOffText = "Кнопка OFF";
    let buttonOffTextNode = document.createTextNode(buttonOffText);
    parent.appendChild(buttonOff);
    buttonOff.appendChild(buttonOffTextNode);

buttonOn.addEventListener("click", cancel);
 
function cancel() {
	alert(this.innerHTML);
}

buttonOff.onclick = function() {
	buttonOn.removeEventListener("click", cancel);
};


Task 5.

let parent = document.getElementsByTagName("BODY")[0];
	let firstDiv = document.createElement("div");
	firstDiv.classList.add("www");
    let text = "Див";
    let textNode = document.createTextNode(text);
    firstDiv.style.width = "100px";
    firstDiv.style.height = "100px";
    let firstP = document.createElement("p");
	firstP.classList.add("wwwp");
    let pText = "Параграф";
    let pTextNode = document.createTextNode(pText);
    firstP.style.width = "100px";
    firstP.style.height = "100px";
    let button = document.createElement("button");
    button.style.width = "100px";
    button.style.height = "20px";
    button.style.background = "yellow";
    let buttonText = "Кнопка";
    let buttonTextNode = document.createTextNode(buttonText);
    let firstA = document.createElement("a");
	firstA.classList.add("wwwa");
	firstA.type = "text";
    let aText = "Ссылка";
    let aTextNode = document.createTextNode(aText);
    firstDiv.appendChild(textNode);
    parent.appendChild(firstDiv);
    parent.appendChild(button);
    button.appendChild(buttonTextNode);
    firstP.appendChild(pTextNode);
    parent.appendChild(firstP);
    firstA.appendChild(aTextNode);
    parent.appendChild(firstA);

parent.onclick = function(event) {
	let target = event.target;	
		if (target.tagName == "A") {
			console.log(target.type);
			return;
		} if (target.tagName == "P") {
			console.log(target.type);
			return;
		} if (target.tagName == "DIV") {
			console.log(target.type);
			return;
		} if (target.tagName == "BUTTON") {
			console.log(target.type);
		}
	}
*/
