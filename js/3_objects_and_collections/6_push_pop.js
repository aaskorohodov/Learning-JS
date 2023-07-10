let Fruits = ['Apple', 'Orange', 'Plum'];

// Push and Pop are working with the last element of an Array:
Fruits.push('Lemon');
console.log(Fruits);			// ['Apple', 'Orange', 'Plum', 'Lemon']
let deletedElement = Fruits.pop();
console.log(Fruits);			// ['Apple', 'Orange', 'Plum']
console.log(deletedElement);	// Lemon


// 'shift' and 'unshift' works the same way, but with the first element of the Array:
Fruits.unshift('Lemon');		// ['Lemon', 'Apple', 'Orange', 'Plum']
console.log(Fruits);
let AnotherDeletedElement = Fruits.shift();
console.log(AnotherDeletedElement);	// Lemon
console.log(Fruits);			// ['Apple', 'Orange', 'Plum']