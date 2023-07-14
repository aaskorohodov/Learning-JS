// try/catch/finally

let res = 0;

try {
	res = 5/d; 
	console.log(res);
}
catch(error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
}
finally {
	console.log('finally')
}

console.log('script keep going');



// Calling custom exception:
/*
Error – regular Error;
SyntaxError – Syntax;
TypeError – Type;
ReferenceError – Link to undeclared variable;
*/

try {
	err = new SyntaxError('Some syntax Error')
	throw err
}
catch(error) {
	console.log(error.name);		// SuntaxError
	console.log(error.message);		// Some syntax Error
	console.log(error.stack);		// Stack...
}


// Catching exact error-type:
try {
	err = new SyntaxError('Syntax');
	throw err;
}
catch(error) {
	if(error.name == 'SyntaxError') {
		console.log('Syntax');
	}
	else {
		throw error;	// Throwing that same error
	}
}
