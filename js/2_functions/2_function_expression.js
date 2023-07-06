// There is an analog of lambda-functions in JS.
// These are functions, that are explicitly set into variables


let myFunc = function() {
	console.log('myFunc');
};	// <- Note, that ; should be set here

myFunc();
console.log(typeof myFunc);		// -> function
// Note, that in this case, you can not call a function before it was declared.
// If declaring a function in regular way, you can call that function before it was declared.
