// Variable with string can be declared in several ways:
let my_var1 = 'value';
let my_var2 = "value";
let my_var3 = `value`;
let my_var4;
my_var4 = 'value';

// Several variables can be declared that way:
let user1 = 'Alex', age1 = 25, email1 = 'my_mail@gmail.com';

// Or this way:
let user2 = 'Alex',
	age2 = 25,
	email2 = 'my_mail@gmail.com';

// Each variable can be declared only once, using 'let' operator. You can not redeclare a variable, using the same name
// But it is possible to reset variable's value:

let my_new_var = 123;
my_new_var = 'Now it is a string';

/*
Note that JS has a weak typing. That means that you do not need to declare variable's type and you can reset variables 
value to any other type
*/

// When a variable_1 is linked to another variable_2, you can change variable_2, which will cause NO affect on variable_1.
// => Variable are not links, instead they make a copy of a value, that was in initial variable
let my_mutable_var = true;
let another_var;
another_var = my_mutable_var;
console.log(another_var);  			// -> true
my_mutable_var = 'Value mutated';
console.log(another_var);			// -> true
console.log(my_mutable_var);		// -> 'Value mutated'