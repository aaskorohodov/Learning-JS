let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(matrix);		// [Array(3), Array(3), Array(3)]
console.log(matrix[1][1]); 	// 5
matrix[1][1] = 100500;
console.log(matrix[1][1]);	// 100500


// Iterating over such matrix can be done this way:

for(let row of matrix) {
    let cols = "";
    for(let val of row)
       cols += val + " ";
 
    console.log(cols);
}

// Another way to iterate:
for(let i=0; i < matrix.length; ++i) {
    let cols = "";
    for(let j = 0; j < matrix[i].length; ++j)
       cols += matrix[i][j] + " ";
 
    console.log(cols); 
}