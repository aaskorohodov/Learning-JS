/*
for(counter_initial_value; condition; counter_change_value) {
	statement
}
*/


let S = 0;
for (let i = 1; i <= 1000; i += 1) {
	S += 1;
}
console.log(S);

// Initialization of a counter may be before for-statement:
let x = 0;
for (; x < 5; x += 1) {
	console.log(x)
}

// // We can also set counter-change-value inside for-loop:
x = 0;
for (; x < 5;) {
	console.log(x)
	x += 1
}

// And we can set condition inside loop as well:
x = 0;
for (;;) {
	if (x > 5) {
		break
	}

	console.log(x)
	x += 1
}


// for can have nested loops:
// for (let i = 0; i < 10; i += 1)
// 	for (let j = 0; j < 5; j += 1)
// 		console.log(i, j)

console.log('-------------')

// If we need to break nested and main cycle, we can do some magic-shit:
some_var:
for (let t = 0; t < 10; t += 1) {
	console.log(1)
	for (let d = 0; d < 5; d += 1) {
		console.log(d)
		if (d == 4) break some_var;
	}
}
// Here some_var will break both cycles

// Continue also exists here:
for (let i = 0; i < 5; i += 1){
	if (i == 2) continue;
	console.log(`i == ${i}`)
}

// Variables, that were declared inside for-statement will be vanished, so they can be redeclare:
for (let i = 0; i < 5; i += 1){
	if (i == 2) continue;
	console.log(`i == ${i}`)
}
