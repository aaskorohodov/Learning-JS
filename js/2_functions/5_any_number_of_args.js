// Analog of 'def func(**args)'
function summAll(...args) {
	// Sums all arguments
	console.log(typeof args)	// -> object
	let sum = 0;
	for (let val of args) {
		sum += val;
	}
	return sum
}


console.log(summAll(1, 1, 1, 1)) 	// -> 4
console.log(summAll())				// -> 0


// In this case, ...args will receive all arguments, after first two
function sumAllV2(arg1, arg2, ...args) {
	let sum = arg1 + arg2;
	for (let val of args) {
		sum += val;
	}
	return sum
}

console.log(sumAllV2(1, 1));			// -> 2
console.log(sumAllV2(1, 1, 1, 1));		// -> 4



// Operator '...' opens provided Array.
// For example, there is a method, that can ONLY receive individuals arguments:
console.log(Math.max(1, 2, 3));	// -> 3, because 3 is the maximum number from provided

// If we have an Array, we can open it up, before sending to that method:
let my_array = [1, 2, 3];
console.log(Math.max(my_array));		// -> NaN
console.log(Math.max(...my_array));		// -> 3

array_1 = [1, 2, 3];
array_2 = [4, 5, 6];
console.log(Math.max(...array_1, ...array_2)); 			// -> 6
console.log(Math.max(...array_1, 1000, ...array_2)); 	// -> 1000

array_3 = [...array_1, ...array_2];
console.log(array_3);		// -> [1, 2, 3, 4, 5, 6]

let letters = [...'Hello'];
console.log(letters);		// -> ['H', 'e', 'l', 'l', 'o']
