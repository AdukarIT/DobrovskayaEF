/* Practice
Task 1. Сделайте так, чтобы по нажатию на кнопку выводился alert.

btn.onclick = function() {
	alert("Привет!");
}


Task 2. Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст изменялся на button.

document.getElementById("practice").addEventListener("click",
	function() {
		this.value = "К";
	});


Task 3. Создайте форму с полем для ввода и двумя кнопками, сделайте так, чтобы по нажатию на кнопку disable, поле становилось неактивным, в случае с enable - наоборот.

let input = document.getElementById("switching");

let enable = input.nextElementSibling;
let disable = enable.nextElementSibling;

enable.addEventListener("click", function() {
	document.getElementById("switching").disabled = false;
});

disable.addEventListener("click", function() {
	document.getElementById("switching").disabled = true;
});


Task 4. Нужно создать документ с полем ввода, объектом произвольной формы и цвета. Сделайте так, чтобы в поле ввода можно было вводить только числовые значения, а объект можно было двигать и узнавать его координаты на странице.



Task 5. Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.

function position(e) {
    document.getElementById("div").onmousemove = function(e) {
    	let msg = document.getElementById("message");
			msg.innerText = event.clientX+':'+event.clientY;
    }
}
position(document.getElementById("div"));


Task 6. Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки. Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки.

let change = document.getElementById("folder");
change.ondblclick = function() {
	change.style.backgroundImage = "url(http://www.pkicon.com/icons/38870/Folder-open-256.png)";
};


Task 7. Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона. Добавление элементов выполните с помощью цикла. Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border-radius до круга. Для замедления эффекта скругления в CSS можно добавить transition.

let divFirst = document.getElementById("divFirst");
let element = document.createElement("div");
element.style.width = "30px";
element.style.height = "30px";
element.style.background = "yellow";
element.style.margin = "15px 15px 15px 15px";
element.style.transition = "all 1s";

for (let i = 0; i < 400; ++i) {
	element = divFirst.appendChild(element.cloneNode(true));
	element.onmouseover = function(e) {
		e.target.style.borderRadius = "50%";
	};
	element.onmouseout = function(e) {
		e.target.style.borderRadius = "0%";
	}
}


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

Task 6.

let dogPicture = document.createElement("img");
dogPicture.src = "https://dogslekub.ru/images/776.jpg";

function exchange() {
	let img = document.images.kitty;
	let defaultImage = img.src;
	img.onmouseover = function () {
		img.src = dogPicture.src;
	}
	img.onmouseout = function () {
		img.src = defaultImage;
	}
}
exchange();


Task 7.

let overlay;

function popup() {
	let greyColor = document.createElement("div");
	greyColor.id = "dark";
	document.body.appendChild(greyColor);
	overlay = window.open("http://www.playcast.ru/uploads/2015/03/27/12847720.png",
   "", "resizable = yes, top = 50%, left = 50%, width = 400, height = 400");
	greyColor.onclick = function () {
		greyColor.parentNode.removeChild(greyColor);
	};
};
*/
