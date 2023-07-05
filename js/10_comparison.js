// If statement can work with comparison operators:
console.log(2 > 1);  	// true
console.log(2 == 1); 	// false
console.log(2 != 1); 	// true

// Note, that in JS you can compare strings in the same way. In that case, codes of the comparing symbols will be compared:
console.log('Z' > 'A'); 			// true
console.log('Cat' > 'Cam'); 		// true -> Compared letter after letter. Analog of 123 > 124
console.log('Sleepy' > 'Sleep'); 	// true -> Because second string is longer

// When comparing this way, JS will convert string into numbers
console.log('2' > 1); 		// true
console.log('01' == 1); 	// true

// Standard logic for true and false
console.log(true == 1); 		// true (true converted to 1)
console.log(false == 0); 		// true (false converted to 0)
console.log(null == undefined); // true (Both converted into 0)

// A fucking catch
console.log(null >= undefined);  // false (null to 0, undefined to NaN)
console.log(null <= undefined);  // false (null to 0, undefined to NaN)

//Another example, that JS is a shitty language
console.log(null > 0);  // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true


// Because of the weak typing, there is a === operand. It compares 2 value, with respect to its type
console.log(true === 1); 	//false
console.log(false === 0); 	//false
console.log("5" === 5); 	//false
console.log("7" === 7); 	//false
console.log(null === undefined); //false

// Same goes for !==
console.log("5" !== 5); 			//true
console.log(null !== undefined); 	// true