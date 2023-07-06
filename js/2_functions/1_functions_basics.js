/*

function function_name(arguments) {
	function's body
}

*/

// It is a common practice to use verbs as function_name

// Example:
function outLog() {
	console.log('outLog');
}

outLog();

// Function's calls can be made before function's declaration
someFunc();

function someFunc() {
	console.log('someFunc');
}

// Arguments
function funcWithArgs(msg, text) {
	console.log(msg);
	console.log(text);
}

funcWithArgs('msg', 'text');

// Functions have access to variables from main scope. But this variable must be declared before function-call
function myFunc() {
	console.log(someVar);	// -> someVar
}
let someVar = 'someVar';
myFunc();

// If a variable exists in inner score (inside a function), than it will be used, instead variable with the same name from main scope
function moreFunc() {
	let mail = 'inner@gmail.com';
	console.log(mail);		// -> inner@gmail.com
}
let mail = 'outer@gmail.com';
moreFunc();

// Function can change variables in global score:
function varChanger() {
	myVar += '123';
}
let myVar = 'asd';
varChanger();
console.log(myVar); // -> asd123



// If function does not receive expected argument, it will set it to undefined and keep going
function funcWithTwoArgs(arg1, arg2) {
	console.log(arg1);
	console.log(arg2);
}
funcWithTwoArgs();	// -> undefined undefined

// If function receives unexpected argument, it will ignore it
funcWithTwoArgs(1, 2, 3); 	// -> 1 2



// You can set default arguments
function withDefaultArg(arg='Default value') {
	console.log(arg);
}
withDefaultArg();	// Default value
// Note, that this works only from ES6



// Functions can return stuff
function funcThatReturnsStuff() {
	return 'Return' + ' ' + 'value';
}
console.log(funcThatReturnsStuff()); 	// 'Return value'

// Default return value for any function is undefined
function funcThatReturnsUndefined() {
	console.log('funcThatReturnsUndefined worked');
}
console.log(`funcThatReturnsUndefined return value is: ${funcThatReturnsUndefined()}`);