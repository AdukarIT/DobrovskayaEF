
//window.addEventListener('DOMContentLoaded', function() {
/*
Task 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

function Worker (name = "", surname = "", rate = 0, days = 0) { 
this.name = name; 
this.surname = surname; 
this.rate = rate; 
this.days = days;

this.getSalary = function(){
	return this.rate * this.days;
	} 
} 

let myMan = new Worker("Иван", "Иванов", 32, 22); 

console.log(myMan.getSalary());


Task 2. Реализуйте класс User принимающий объект со свойствами name и password, предусмотрите метод login, возвращающее значение true 
в случае совпадение связки имя/пароль  и changeName(). Отнаследуйте класс User в класс Admin и сделайте так, чтобы админ всегда имел дефолтное поле имя (admin) и чтобы в реализации отсутствовала возможность смены имени, а также при логине в консоль выводилось сообщение о том, что админ залогинен.

function User(name, pwd) {
	this.name = name;
	this.password = pwd;

	this.login = function(nm, pw) {
		return ((nm == this.name) && (pw == this.password));
	}

	this.changeName = function(newName) {
		this.name = newName;
	}
}

function Admin(pwd) {
	User.call(this, "admin", pwd);

	let oldLogin = this.login;
	this.login = function(nm, pw) {
		let loginResult = oldLogin.apply(this, arguments);
		if (loginResult) {
			console.log("Админ залогинен");
			return loginResult;
		}

		this.changeName = function(newName) {
			return;
		}
	}
}

	let vasia = new User("vasia", "12345");
	vasia.changeName("petia");
	console.log(vasia.login("petia", "12345"));

	let vasily = new Admin("12345!_tO");
	vasily.changeName("petia");
	console.log(vasily.login("petia", "12345!_tO"));
	console.log(vasily.login("admin", "12345!_tO"));
	

Task 3. Реализуйте в прототипном стиле класс Machine с базовыми методами включить/выключить. Создайте класс Fridge и отнаследуйтесь от Machine, создайте метод на охлаждение, а так же сделайте так, чтобы методы включения/выключения  работали с выводом в консоль сообщения с текущим значением enabled.

function Machine() {
	this._enabled = false;
}

Machine.prototype.on = function() {
	this._enabled = true;
	console.log("enabled: " + this._enabled);
};

Machine.prototype.off = function() {
	this._enabled = false;
	console.log("enabled: " + this._enabled);
};


function Fridge(tmp) {
	Machine.call(this);
	this.temperature = tmp;
	this._startTemperature = tmp;
}

Fridge.prototype = Object.create(Machine.prototype);

Fridge.prototype.freeze = function(delta) {
	this.temperature -= delta;
}

Fridge.prototype.off = function() {
	Machine.prototype.off.call(this);
	this.temperature = this._startTemperature;
};

let fridge = new Fridge(21);
fridge.on();
fridge.freeze(5);
console.log(fridge.temperature);
fridge.off();
console.log(fridge.temperature);


Task 4. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString{
	reverse(str){
		return str.split("").reverse().join("");
	} 
	ucFirst(str){
		return str[0].toUpperCase() + str.substring(1);
	}
	ucWords(str){
		str = str.split(" ");
		for (let i = 0; i < str.length; i++){
			str[i] = str[i][0].toUpperCase() + str[i].substring(1);
		}
		return str.join(" ");
	} 
} 
let str = new MyString(); 
console.log(str.reverse("abcde")); 
console.log(str.ucFirst("abcde")); 
console.log(str.ucWords("abcde abcde abcde"));


Task 5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

class Validator {
	isEmail(email){
		return /^[a-zA-Z0-9._\-]+@[a-z]+\.[a-z]{2,3}$/.test(email);
	}
	isDomain(domain){
		return /^[a-zA-Z0-9._\-]+\.[a-z]{3}$/.test(domain);
	}
	isDate(date){
		return /^\d\d\.\d\d\.\d\d\d\d$/.test(date);
	}
	isPhone(phone){
		return /^\+\d\d\d\s\d\d\s\d\d\d-\d\d-\d\d$/.test(phone);
	} 
} 

let validator = new Validator(); 

console.log(validator.isEmail("phphtml@mail.ru")); 
console.log(validator.isDomain("phphtml.net")); 
console.log(validator.isDate("12.05.2020")); 
console.log(validator.isPhone("+375 29 817-68-92"));


Task 1.

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + " " + this.surname;
	}
}

class Student extends User {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}

	getCourse() {
		let nd = new Date();
		let course = nd.getFullYear() - this.year;
		if (course > 5) {
			return "Не студент с " + (this.year + 5) + " года";
		}
		return course + " курс - еще студент"; 
} 
} 

let student = new Student("Иван", "Иванов", 2016);

console.log(student.getFullName()); 
console.log(student.year); 
console.log(student.getCourse());


});


Task 2.

function Product(proteins = 0, fats = 0, carbohydrates = 0, weight = 0, cost = 0) { 
this.proteins = proteins; 
this.fats = fats; 
this.carbohydrates = carbohydrates;
this.weight = weight;
this.cost = cost;
this.calorie = function() {
	return this.proteins * 4 + this.fats * 9 + this.carbohydrates * 4;
	};
this.costFor = function() {
	return this.cost / this.weight * 100;
};
} 

let gamburger = new Product(12.92, 10.09, 28.98, 99, 1.75);
let cheeseburger = new Product(12.97, 11.79, 26.71, 113, 1.9);
let bigMac = new Product(11.82, 14.96, 18.48, 210, 4.5);

console.log("100 грамм гамбургера содержит: " + Math.floor(gamburger.calorie()) + " кКал и стоит: " + gamburger.costFor() + " руб.");
console.log("100 грамм чизбургера содержит: " + Math.floor(cheeseburger.calorie()) + " кКал и стоит: " + cheeseburger.costFor() + " руб.");
console.log("100 грамм биг-мака содержит: " + Math.floor(bigMac.calorie()) + " кКал и стоит: " + bigMac.costFor() + " руб.");
*/
