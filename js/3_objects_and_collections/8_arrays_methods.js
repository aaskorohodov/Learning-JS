//		-- splice -- 
// Can delete, add and replace elements
// Array.splice(index[,deleteCount, elem1, ..., elemN])

// Deleting elements
let ar = [1, 2, 3, 4, 5];
ar.splice(2, 2);	// Deleting from second (by index) element; Deleting 2 elements
console.log(ar);	// [1, 2, 5]

// Replacing first 3 elements with 2 new elements
ar = [1, 2, 3, 4, 5];
let DeletedEleemnts = ar.splice(0, 3, 'Some', 'Strings');		// Deleting from first; Deleting 3 elements; Replacing with provided strings
console.log(ar);				// ['Some', 'Strings', 4, 5]
console.log(DeletedEleemnts);	// [1, 2, 3]

// We can add an element to some specific position:
ar = [1, 2, 3, 4, 5];
ar.splice(3, 0, 'string');
console.log(ar);	// [1, 2, 3, 'string', 4, 5]
// Here we indicated splice(3, 0, 'string'):
// 3 - element to start with (from 3)
// 0 - delete 0 elements (delete 0 elements)
// 'string' - element to add (add this element)

// The same goes for indicating the position of element, counted from the end:
ar = [1, 2, 3, 4, 5];
ar.splice(-3, 0, 'string');
console.log(ar);	// [1, 2, 'string', 3, 4, 5]



//		-- slice --
//	Array.slice([start], [end])
// It returns a new Array, in which it copies elements from [start] to [end]


ar = [1, 2, 3, 4, 5];
ar1 = ar.slice(2, 3);
console.log(ar1);		// [3]

ar2 = ar.slice(3);
console.log(ar2);		// [4, 5]

ar3 = ar.slice(-3);
console.log(ar3);		// [3, 4, 5]

ar4 = ar.slice(1, 3);
console.log(ar4);		// [2, 3]

// Slice can be used to copy Array:
copy = ar.slice();
console.log(copy); 		// [1, 2, 3, 4, 5]


//		-- concat --
//	Makes a copy of Arrays, concatenated into single one
// 	Array.concat(arg1, arg2...)
// 	Can be used with Arrays or simple data (strings, numbers, ...)

ar = [1, 2];
let new_array = ar.concat([2, 4], 5, 6, 'string');
console.log(new_array);		// [1, 2, 2, 4, 5, 6, 'string']

// In case using concat with objects - object will NOT be copied. Instead we will get a link to it:
ar = [1, 2];
let my_obj = {'key': 'value'};
new_array = ar.concat(my_obj);
new_array[2].key = 'another_value';
console.log(my_obj);		// {key: 'another_value'}



//		-- forEach --
//	array.forEach(function(item, index, array) {
// 	 ... what to do with item
// });

ar = [1, 2, 3, 4, 5];
ar.forEach(function(item) {
	console.log(item);
})

// Same for arrow-functions:
ar.forEach((item) => console.log(item));

// Attempt to change elements (does not work):
ar = [1, 2, 3, 4, 5];
ar.forEach(function(item) {
	item += 100;
})
console.log(ar);		// [1, 2, 3, 4, 5] (does not work like that)

// Correct way to modify initial Array:
ar = [1, 2, 3, 4, 5];
ar.forEach(function(item, index, array) {
  array[index] = item += 100;
});
console.log(ar);  		// [101, 102, 103, 104, 105]

// Example with finding all even numbers:
ar.forEach( (item, index) => {
	if(item % 2 == 0) console.log(`${item} with index ${index} is even`);
});




//		-- indexOf, lastIndexOf, includes --
// 	Array.indexOf(item, from) - searcher for 'item' starting 'from' and returns an index of that element or -1, if an element was not found
//	Array.lastIndexOf(item, from) - same, but searches from left to right
// 	Array.includes(item, from) - searches for 'item' starting 'from' and returns true, if an element was found
//	All these methods uses === to find an element

ar = [1, 2, 3, 4, 5, 'watch', 0, false, null];
result1 = ar.indexOf('watch', 0);		// Searching for 'watch', starting from 0
console.log(result1);					// 5

result2 = ar.lastIndexOf(null, 0);		// Searching for null, starting from 0, but moving left (we will look only at the first element => will not find it)
console.log(result2);					// -1

result3 = ar.includes(0, 3);			// Searching 0, starting from index 3
console.log(result3);					// true





//		-- find, findIndex --

// let result = Array.find(function(item, index, array) {
// 		if true – returns current element and stops iterating
// 		if did not find, returns undefined
// });
//	findIndex works the same, but returns an index

// Lets find first car with the price lower than 1000:
let cars = [
    {model: "Toyota", price: 1000},
    {model: "Opel", price: 800},
    {model: "Reno", price: 1200}
];
let res = cars.find(item => item.price < 1000);
console.log(res);		// {model: 'Opel', price: 800}

ar = [1, 2, 3, 4, 5];
res = ar.find(item => (item > 2 && item < 4));
console.log(res);		// 3
res = 100;
console.log(ar);		// [1, 2, 3, 4, 5] => The result is a copy, not the element itself




//		-- filter --
// 		Searches for all valid results and returns an Array with all of them
// let results = Array.filter(function(item, index, array) {
// 		if true – element will be added to the result, and it will keep going
// 		if no element were found, it will return an empty Array
// });

cars = [
    {model: "Toyota", price: 1000},
    {model: "Opel", price: 800},
    {model: "Reno", price: 1200}
];
res = cars.filter(item => item.price < 1200);
console.log(res);		// [{model: "Toyota", price: 1000}, {model: "Opel", price: 800}]




//		-- map --
// let result = Array.map(function(item, index, array) {
//   // returns the result of the function, that was declared inside of it
// });

cars = ["Toyota", "Opel", "Reno"];
res = cars.map(function (item) {
    return item.length;
});
console.log(res);		// [6, 4, 4] => lengths for each element




//		-- sort	--
// Array.sort(function(a, b) {
// 		if (a > b) return 1; // if first value is greater than the second one
// 		if (a == b) return 0; // if they are equal
// 		if (a < b) return -1; // if first is less than the second one
// })

let dig = [4, 25, 2];
dig.sort();
console.log( dig );		// [2, 25, 4] because by default it sorts them as strings

dig.sort(function(a, b) {
    if(a > b) return 1;
    else if(a < b) return -1;
    else return 0;
});
console.log(dig);		// [2, 4, 25]

// Same:
dig.sort( (a, b) => a-b );
console.log(dig);		// [2, 4, 25]




//		-- reverse --
//  reverses Array
ar = [1, 2, 3]
ar.reverse();
console.log(ar);		// [3, 2, 1]



//		-- split, join --

// Splits any string by requested algorithm
let emailsTo = "alex12@m.ru; m2@m.com; pp@g.com; upr@g.ru";
let arEmails = emailsTo.split("; ");
for(let email of arEmails)
    console.log(email);

ar = [1, 2, 3, 4];
res = ar.join(', ');
console.log(res);		// '1, 2, 3, 4'
console.log(typeof res)	// string




//		-- reduce, reduceRight --
// Too complicated, suck this shit




// 		-- isArray --
// true, if object is an array

console.log(typeof {}); // object
console.log (typeof []); // object

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true