function showMessage(msg) {
    console.log(msg);
}

// Each function has a name-property
console.log(showMessage.name);   // -> showMessage


// 'length' show the number of arguments, that function expects
function func1(a) {}
function func2(a, b) {}
function other(a, b, ...more) {}
 
console.log(func1.length); // -> 1
console.log(func2.length); // -> 2
console.log(other.length); // -> 2



// Functions can be assigned with any additional properties
function funcCount() {
    console.log("Function was called: " + ++funcCount.counter);
}
funcCount.counter = 0
funcCount();    // -> Function was called: 1
funcCount();    // -> Function was called: 2