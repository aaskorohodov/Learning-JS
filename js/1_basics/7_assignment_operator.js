// Multiple assignment
let a, b, c;
a = b = c = 2 + 2;
console.log(a, b, c); // -> 4 4 4


let d, e = 1;
let f = 3 - (d = e + 1);
console.log(d, e, f); // -> 2 1 1