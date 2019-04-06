
/*
Task 1. Создайте селект с несколькими опциями, добавьте одну опцию используя Javascript, сделайте так, чтобы по выбору опции выводилось сообщение 
с данными этой опции.

let opt = new Option("Канада", "can");

document.forms.practice.country.appendChild(opt);

document.forms.practice.country.addEventListener("change", function() {
	let opt = this.options;
	for (let i = 0; i < opt.length; i++) {
		if (opt[i].selected) {
			let msg = document.getElementById("message");
			msg.innerText = "Вы выбрали опцию " + opt[i].innerText;
			break;
		}
	};
});


Task 2. Создайте форму вычисления процентов по вкладу.

document.forms.sum.sum1.addEventListener("input", function() {
	let getSumOf = this.value;
	let msg = document.getElementById("message");
			msg.innerText = "Это было " + getSumOf;
			console.log(msg.innerText);

document.forms.calc.forMonth.addEventListener("change", function() {
	let opt = this.options;
		for (let i = 0; i < opt.length; i++) {
			if(opt[i].selected) {
			let	sum = +getSumOf;
			let msg1 = document.getElementById("message1");
			sum = Math.round(sum * (1 + 0.01 * opt[i].value));
			msg1.innerText = "Это будет " + sum;
			if(capitalization.checked) {
					sum = Math.round(sum * (1 + 0.01));
					let msg1 = document.getElementById("message1");
					msg1.innerText = "Это будет " + sum;
				}
			}	
	}
		event.preventDefault();		
	});
});

});


Task 1. Создайте регулярное выражение для поиска трёх точек.

let regExpDots = /\.{3,}/g;


Task 2. Создайте regexp, который ищет все положительные числа, в том числе десятичные.

let regExpPositive = /\d+(\.\d+)?/g; //   \d+ (целое число); (\.\d+)? (десятичное число, необязательное)


Task 3. Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd.

let regExpColors = /#[a-f0-9]{3}([a-f0-9]{3})?/i;


Task 4. Предложите строку, которая подойдет под выражение ^$.

let str = " ";


Task 5.

function validation() {
	let name = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	let regExp = /^(?=.{6})(?=.*[^a-zA-Z])/;
	if (name === "" || password === "") {
		alert("Не все поля заполнены");
		return false;
	} else if (!(password).match(regExp)) {
		alert("Пароль не совпадает");
		return false;
	} else {
		return alert("Добро пожаловать!");
	}
}


/*
Task 1.

function placeOrder() {
	if(document.getElementById("name").value == "") {
		alert("Вы не указали имя");
	} else if(document.getElementById("minutes").value == "" || isNaN(document.getElementById("minutes").value)) {
		alert("Укажите количество минут");
	} else {
		form.submit;
	}
}

Task 2.

function confirm() {
	if ( document.getElementById('name').value == "" ) {	
		alert ("Заполните поле")
		
	} else {
		form.action = "mailto:address@domen.domen";
	}
}

document.getElementById("res").onclick=function() 
	{
		alert ("Вы уверены, что хотите очистить форму?") ;  

}

Task 3.

function validation() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (name === "" || email === "") {
		alert("Не все поля заполнены");
		return false;
	} else if (!(email).match(regExp)) {
		alert("Укажите верный e-mail");
		return false;
	} else {
		return true;
	}
}


Task 4.

function validation() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (name === "" || email === "") {
		document.getElementById("name").className = "invalid-field";
		return false;
	} else if (!(email).match(regExp)) {
		document.getElementById("name").classList.remove("invalid-field");
		document.getElementById("email").className = "invalid-field";
		alert("Укажите верный e-mail");
		return false;
	} else {
		return true;
	}
}


Task 5.

let str = "функция - это функция";
console.log(str.replace(/функция/g, "ФУНКЦИЯ"));


Task 6.

let regExp = /^((0\d|10|11).[0-5]\d\sam)|((1[2-9]|2[0-3]).[0-5]\d\spm)$/;
console.log(regExp.test("12.11 pm"));


Task 7.

let str = "dsf xxx xxx sd"; 
console.log(str.replace(/\b(\w+)\s(\s?\1\b)+/g, "$1"));
*/

