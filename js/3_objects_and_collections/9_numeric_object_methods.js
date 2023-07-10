//		-- Number.toString --

let num = 255;
num = num.toString();
console.log(num);			// 255
console.log(typeof num);	// string

// This method can be called with out declaring variable, right on the number:
num = 100..toString();	// -> double '..'
console.log(num);			// 100
console.log(typeof num);	// string



// 		-- Rounding --
// Math.floor – rounding down
// Math.ceil – rounding up
// Math.round – rounding to the nearest integer

console.log(Math.floor(1.1));	// 1
console.log(Math.ceil(1.9));	// 2
console.log(Math.round(1.5));	// 2
console.log(Math.round(1.4));	// 1

num = 1.2345;
console.log(num.toFixed(2));	// 1.23




// 		-- isNan --
//		Let you check, if object is a number

console.log(isNaN(NaN));    // true
console.log(isNaN("abc"));	// true
console.log(isNaN("1"));    // false
console.log(isNaN(2));      // false





//		-- isFinite --
// 		Let you check if object if a finite number (not infinite number)

console.log(isFinite("15")); 		// true
console.log(isFinite("str")); 		// false
console.log(isFinite(Infinity));	// false

num = prompt("Enter a number", '');
if(isFinite(num)) {
	console.log("It's a number");
}
else {
	console.log("Not a number");
}

let nothing = ''
console.log(isFinite(nothing));		// true -> because '' is apparently a number, did not you know that? Silly




//		-- parseInt, parseFloat --
//		Gets number from a string

let arg1 = "12pt";
let arg2 = "100%";
let arg3 = "340px";

console.log(parseInt(arg1));	// 12
console.log(parseInt(arg2));	// 100
console.log(parseInt(arg3));	// 340

console.log(parseFloat("12.5pt"));		// 12.5
console.log(parseFloat("12,5pt"));		// 12 	(because comma, not dot)
console.log(parseFloat("  90.5% "));	// 90.5
console.log(parseFloat("+30.5px"));		// 30.5





// 		-- Math.random --
//  Generates random number from 0 to 1

for(let i = 0; i < 10; ++i)
   console.log(Math.random());




// 		-- Math.max, Math.min --

let max = Math.max(1, 2, 0, -10, 5, 7);
let min = Math.min(1, 2, -10, 5);

console.log(max);		// 7
console.log(min);     	// -10

let my_ar = [1, 2, 3, 4]
console.log(Math.max(my_ar))	// NaN