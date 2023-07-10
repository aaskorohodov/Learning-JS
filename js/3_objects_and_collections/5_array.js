// Arrays are made like so:
let ar = [1, 2, 3, 4];

// Getting element from array:
console.log(ar[0]);	// 1
console.log(ar[3]);	// 4

console.log(ar[100500]);	// undefined (no exception will be raised)

// Changing element
let str = ['Apple', 'Orange', 'Plum'];
str[1] = 'Pear';
console.log(str[0]);	// Pear


// Adding element into array
str[3] = 'Lemon';

// Getting length:
console.log([1, 2, 3].length);	// 3

// Iterating over an array:
for (let i=0; i < str.length; i += 1) {
	console.log(str[i]);
}

// Array can be shortened with length:
my_array = [1, 2, 3, 4, 5];
my_array.length = 3;
console.log(my_array);	// 1, 2, 3
// It will crop last elements in the array

// Array can have any elements in it:
let some_array = ['Apple', {name: 'John'}, true, function() {alert('Hello');}];
console.log(some_array);

// An array can be declared this way:
let other_array = [
	'Apple',
	{name: 'John'},
	true,
	function() {alert('Hello');}
	];
console.log(other_array);


// An element can be set into any place in an array (which is a bad thing to do):
let bad_array = [];
bad_array[100500] = 'Value';
console.log(bad_array[100500]);	// Value
console.log(bad_array[0]);		// undefined

// Arrays can be assigned with any attributes, which is considered a bad practice, due to JS's optimizations issues in that case:
bad_array.some_property	= 'Property'
console.log(bad_array.some_property)


// Another way to iterate over an array:
let Fruits = ['Apple', 'Orange', 'Plum'];
for (let el of Fruits) {
	console.log(el);
}
// This method does NOT allow to change elements, because on each iteration, 'el' is a copy of actual element in an array
// The first method (for (let i=0; i < str.length; i += 1)) DOES allow to mutate elements

// Note that this way (suing 'in') you will get not the actual elements, but their indices. It can be used this way:
for (let ee in Fruits) {
	console.log(Fruits[ee]);
}