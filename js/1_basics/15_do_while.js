/*
do {
	cycle
}
while(condition)
*/

// Here cycle goes first, after that condition is being checked, and if condition == true: cycle breaks
// Example:
const PSW = "password";
let inputed_psw = null;
do {
	inputed_psw = prompt("Enter password", "");
}
while (inputed_psw != PSW);
console.log("You have logged in!");