// document.forms contains all forms of the current HTML

// Getting form
let form = document.forms[0];	// Getting first one

form = document.forms.reg;		// Getting by form's name, that is set in HTML


// Accessing specific form's element:
let user = form.elements.user;
console.log(user);
console.dir(user);


// If there are 2 elements with the same name - both will be packed into Array:
let sex_element = form.elements.sex;
console.dir(sex_element);

// We can access form's elements without .elements:
sex_element = form.sex;
console.dir(sex_element)



// Getting data from form elements:
let about = form.about;
console.log(user.value, sex_element[0].checked, about.value);	// 123 true Self


// Getting data from <select>:
let city = form.city;
console.dir(city.options);			// Array with all options
console.log(city.value);			// Current selected value
console.log(city.selectedIndex);	// Current selected index


// Index and value can be set:
city.value = 'Concord';		// This way it can be set only to those, that are exists as options
city.selectedIndex = 2;