/* 
There are 7 'primitive' data-types in JS:

1. Number - can be int or float
*/

// Number
let int = 2;
let negative = -2;
let float = 2.001;
// Note that floats are separated with a dot

// There is an exponential support
let big_number_1 = 1e1; // == 10
let big_number_2 = 2e1; // == 20
let big_number_3 = 8.7e3; // == 8700
// ...e1 is an equivalent of multiplying a number by 10xe1.
// So, e1 == number x 10
// e2 == number x 100
// e3 == number x 1000
// ...

// To get the type of a variable, you can use:
// typeof <variable>
// typeof (<variable>)
console.log(typeof int); // number
console.log(typeof big_number_3); // number

// There is 'Infinity' data-type, which represents, e.g. result of 0-division
let inf = 1/0;
console.log(typeof inf); // Infinity

// Infinity can be explicitly set to any variable
let inf_2 = Infinity;

// Infinity can have a negative value
let negative_inf = -Infinity;

// Infinity can be set automatically, if a number is too big
let extreme_number = 1e1000;
console.log(typeof extreme_number); // -> Infinity


// NaN is 'Not a Number'. We can get such type with this
let my_nan = 'string' / 2;
console.log(my_nan); // -> NaN
console.log(typeof my_nan); // -> number
my_nan = my_nan + 10;
console.log(my_nan); // -> NaN
console.log(typeof my_nan); // -> number (still)


// Strings can be set, using `` (super-string)
let num_1 = 1;
let num_2 = 2;
let super_string = `a = ${num_1}, b = ${num_2}`;
console.log(super_string) // 'a = 1, b = 2'


// boolean
let true_var = true, fals_var = false;
let isGreater = 4 > 1;
console.log(isGreater) // -> true


// null and undefined
let my_null = null;
let my_undefined = undefined;
let other_undefined;
console.log(other_undefined); // -> undefined
// The difference is that null indicates, that this variable got its value, but it is (yet) is null
// undefined, on the other hand, indicates that the variable was not assigned any values yet


// Symbol is a unique identifier
let id = Symbol();
let id2 = Symbol();
console.log(id === id2); // -> false