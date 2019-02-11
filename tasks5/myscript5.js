/*

Task 1.

let obj = {};

function test(obj, string) {
	if (string in obj) {
	return true;
} else {
	return false;
}
}
console.log(test(obj, string));


Task 2.

let recipe = {
	name: "belyash",
	portion: 6,
	ingredients: [
	{ name: "milk", amount: 200, unit: "ml" },
		{ name: "flour", amount: 400, unit: "grams" },
			{ name: "yeast", amount: 20, unit: "grams" },
				{ name: "egg", amount: 1, unit: "pcs" },
					{ name: "oil", amount: 4, unit: "tablespoon" },
						{ name: "sugar", amount: 1, unit: "tablespoon" },
							{ name: "solt", amount: .5, unit: "tea spoon" },
								{ name: "meat", amount: 500, unit: "grams" },
									{ name: "onion", amount: 2, unit: "pcs" },
										{ name: "pepper", amount: .05, unit: "tea spoon" }
										]
}
console.log("На одну порцию Вам понадобится: ");

function onePortion(recipe) {
	for (let i = 0; i < recipe.ingredients.length; i++)
    console.log(recipe.ingredients[i].name + ": " + (Math.round((recipe.ingredients[i].amount / recipe.portion) * 100) / 100) + " " + recipe.ingredients[i].unit + ";");
}  

console.log(onePortion(recipe));

Task 3.

let cylinder = {
radius: 3,
height: 20,
getSize: function () 
{return 3.141592653589793238462643383279502 * (this.radius * this.radius) * this.height}
}

console.log(cylinder.getSize());

Task 4.

let penguin = {
name: "Frobisher",
origin: "Doctor Who Magazine and two Big Finish audio dramas",
creator: "Steve Parkhouse and John Ridgway",
notes: "A humanoid from a shape-changing extra-terrestrial race who prefers to take the guise of a penguin.",
canFly: true,
sayHello: function () 
{return "Hello, my name is " + this.name + "!"},
fly: function () 
{ if (penguin.canFly === true) {
    	return "I can fly!!!";
    } else {
    	return "OOOps... I can't fly...";
    }
}
}

console.log(penguin.sayHello());
console.log(penguin.fly());

*/
