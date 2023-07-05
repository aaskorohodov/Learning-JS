let x = "3", y = 6;
console.log(x-y); // -3

// But when trying to add string with int, the result will be a string-concatenation
let s = '3';
let w = 3;
console.log(s + w); // 33
// To avoid this, we can use
console.log(+s + +w); // 6

console.log(3+5+'2'); // 82 !


let arg = -x;
console.log(arg, typeof arg); // -> -3 'number'

let a = true, b = null, c = undefined;
console.log(-a);    	// -1
console.log(-b);    	// -0
console.log(-c);     	// NaN
console.log(typeof -a, typeof -b, typeof -c);  // -> number number number


let f = "4", g = "not a number", h = true, j = null, k = undefined;
console.log(typeof +f, typeof +g, typeof +h, typeof +j, typeof +k);  // -> number number number number number
console.log(+f, +g, +h, +j, +k);  // -> 4 NaN 1 0 NaN

let negative_num = '-10'
console.log(+negative_num); // -> -10


console.log(5 % 2); // 1 -> remainder of the division
console.log(8 % 3); // 2
console.log(6 % 3); // 0

console.log(5.2 % 2.3); // about 0.6000...5

console.log(2 ** 2); // 4  (2 * 2)
console.log(2 ** 3); // 8  (2 * 2 * 2)
console.log(4 ** 2); // 16  (4 * 4)

console.log(4 ** (1/2)); // 2 -> equivalent of the square root
console.log(8 ** (1/3)); // 2 -> equivalent of the cube root


let counter = 2, cnt = 5;
counter++; 	// adds one. Equivalent of 'counter = counter -1', but works faster
cnt--; 		// subtracts one
console.log( counter, cnt ); // 3, 4

// Also will work this way:
console.log(++counter);
console.log(--cnt);

// But there is a difference
let a1, b1, c1 = 10, d1 = 10;
a1 = c1++;
b1 = ++d1;
console.log(a1, b1, c1, d1);  // 10 11 11 11
// The reason is that 'a1 = c1++' will first assign a1 to 10, and then add 1 to c1. So a1 will have assigned 10, but c1 will receive +1


let a2 = 0, b2 = 1;
a2 += 5;        		// -> 5		Equivalent: a = a + 5
b2 -= 2;        		// -> -1	Equivalent: b = b - 2
console.log(a2, b2);
a2 *= 10; 			// -> 50		Equivalent: a = a * 10
b2 /= 4;          	// -> -0.25 	Equivalent: b = b / 4
console.log(a2, b2);