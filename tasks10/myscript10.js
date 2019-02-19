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
*/
