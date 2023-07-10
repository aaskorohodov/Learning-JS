// Set can consists only from unique values. This is an ordered collection, but you can not get an element by its index

/*
new Set(iterable) – creates Set. Is provided with iterable object - copies its values
set.add(value) – adds new value
set.delete(value) – deletes value and returns true, if value existed
set.has(value) – returns true, if value exists
set.clear() – clears Set
set.size – returns the number of elements
*/


let guests = new Set();
 
let Alex = {name: "Alex", age: 25};
let Max = {name: "Max", age: 32};
let Jany = {name: "Jany", age: 18};
 
guests.add(Alex);
guests.add(Max);
guests.add(Jany);
guests.add(Jany);
guests.add(Jany);

console.log(guests);

// While iterating, valueAgain exists, so that this method could works with Maps as well (there are 3 args, so here there is valueAgain instead of key or value, idk)
guests.forEach(function(value, valueAgain, originalSet) {
	console.log(value)
});