// bool -> string
let a = true;
console.log(a);  		// -> true
console.log(typeof a); 	// boolean

a = String(a)
console.log(a);  		// -> true
console.log(typeof a); 	// string


// str -> number
let b = "123";
b = Number(b);
console.log(b); 		// -> 123
console.log(typeof b); 	// string

let c = "abc";
c = Number(c);
console.log(c); // -> NaN

console.log(Number("   123   ")); // 123
console.log(Number("123r"));      // NaN (because of "r")
console.log(Number(true));        // 1
console.log(Number(false));       // 0


// Automatic string conversion
let my_num = '6';
let my_num_2 = '3';
let my_num_3 = my_num / my_num_2;
console.log(my_num_3); 			// -> 2
console.log(typeof my_num_3); 	// -> number

let my_num_4 = my_num + my_num_2;
console.log(my_num_4); 			// -> 63
console.log(typeof my_num_4); 	// -> string

let my_num_6 = '6'
let my_num_7 = 3
let my_num_8 = my_num_6 + my_num_7;
console.log(my_num_8); 			// -> 63 (still)
console.log(typeof my_num_8); 	// -> string (still)


// -> boolean
console.log(Boolean(1)); 			// true
console.log(Boolean(0)); 			// false
console.log(Boolean("0")); 			// true
console.log(Boolean("Hello!")); 	// true
console.log(Boolean("")); 			// false