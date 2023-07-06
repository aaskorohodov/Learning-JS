// Simple example with the absolute value of a number (ABS)
let x = -5;
if(x < 0) x = -x;
console.log("|x| = " +x);

x = 5
if(x < 0) x = -x;
console.log("|x| = " +x);


// Straight forward
x = -5;
if(x < 0) console.log("x is negative");
if(x >= 0) console.log("x is positive");


x = 5
// Same with else
if(x < 0) console.log("x is negative");
else console.log("x is positive");

// Nested if-else
x = 0
if(x < 0) console.log("x is negative");
else 
	if(x > 0) console.log("x is positive");
	else console.log("x is 0");



// In case there are several operators to be executed, in case if-condition, then they should be nested in {}
x = -10
let sgn = 0;
if(x < 0) {
	sgn = -1;
	console.log("x is negative", sgn);
}
else if(x > 0) {
	sgn = 1;
	console.log("x is positive", sgn);
}
else console.log("x is 0", sgn);

// Ternary conditional operator. Is condition is true -> variable 'accessAllowed' will receive first value, otherwise second one
let age = 18;
let accessAllowed = (age > 18) ? true : false;
console.log(`accessAllowed: ${accessAllowed}`)
// Note, that this is a bool-shit, because it is the equivalent of:
accessAllowed = age > 18
console.log(`accessAllowed: ${accessAllowed}`)


// AND exists in JS and looks like &&:
x = 4;
if(x >= 2 && x <= 7) {
	console.log("x is in range of [2; 7]");
}
else {
	console.log("x is not in range of [2; 7]");
}

// OR also exists and looks like ||
// In the example we will check, if a number is NOT in a given range
x = 40;
if(x < 2 || x > 7) {
	console.log("x is not in range of [2; 7]");
}
else {
	console.log("x is in range of [2; 7]");
}

// && has higher priority over ||, so if they appear in the same line, && will be executed first

// if can check single number. In that case, any non-zero number will be true:
if(1) {
	console.log('true')
}
if(-1) {
	console.log('true')
}
if(0) {
	console.log('true')
}
else {
	console.log('false')
}

// NOT is user that way:
if(!0) {
	console.log('not zero')
}
