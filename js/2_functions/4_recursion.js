// Recursive call
function pow(x, n) {
	// Returns first argument in the power of the second argument
	if (n <= 0) {
		return 1;
	}
	else {
		return x * pow(x, n-1);
	}
}

console.log(pow(2, 3))
