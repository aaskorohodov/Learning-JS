// JS can create functions from thin air:
let sumTwo = new Function('a', 'b', 'return a+b;');
console.log(sumTwo(1, 2)) 	// -> 3

let printHello = new Function('console.log("Hello")')
printHello()	// -> 'Hello'