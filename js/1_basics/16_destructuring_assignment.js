let cars = ["yaguar", "porsche", "mercedes"];
let [car1, car2, car3] = cars;
console.log(car1, car2, car3);	// -> yaguar porsche mercedes

let [carA, , carC] = ["yaguar", "porsche", "mercedes"];
console.log(carA, carC)			// -> yaguar mercedes


let [firstName, middleName, lastName] = "John Smith Third".split(" ");
console.log(firstName, middleName, lastName);	// -> John Smith Third


// 'last' will get all the rest elements as an Array
let [fr1, fr2, ...last] = ["Pear", "Plum", "Apple", "Peach", "Grape"];
console.log(fr1, fr2, last);	// -> Pear Plum ['Apple', 'Peach', 'Grape']


let [frA, frB, frC, frD] = ["Pear", "Plum"];
console.log(frA, frB, frC, frD);	// -> Pear Plum undefined undefined

// We can set default values to the 'undefined':
let [fr_1 = 1, fr_2 = 2, fr_3 = 3, fr_4 = 4] = ["Pear", "Plum"];
console.log(fr_1, fr_2, fr_3, fr_4);	// -> Pear Plum 3 4


// Defaults can be functions:
let [name = prompt('Enter your name'), last_name = prompt('Enter your lastName')] = []
// This will make a pop-up, asking for name and last_name


// Will work with any iterative-object
let [a1, a2, a3, a4] = "Boby"; 
console.log(a1, a2, a3, a4);	// -> B o b y


// This can be used to iterate over iterable objects
let car = new Map();
car.set("model", "Toyota").
    set("color", 'Blue').
    set("price", 1000);
for (let [key, value] of car) {
	console.log(key, value)
}