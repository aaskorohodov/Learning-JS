console.log(document.body.constructor.name);			// HTMLBodyElement

console.log(document.body instanceof HTMLBodyElement); 	// true
console.log(document.body instanceof HTMLElement); 		// true
console.log(document.body instanceof Element); 			// true
console.log(document.body instanceof Text); 			// false

// Printing structure:
console.dir(document.body);


// Any elements can be assigned with properties and methods:
body = document.body;

body.atr = 123;
console.log(body.atr);				// 123
body = document.body;

body.customMethod = function() {
	return this.atr;
}
console.log(body.customMethod());	// 123


// Attributes should be set using setters and getters:
/*
elem.hasAttribute(name) – checks is atr exists;
elem.getAttribute(name) – get atr's value;
elem.setAttribute(name, value) – set atr's value;
elem.removeAttribute(name) – removes atr
*/

let div = document.getElementById('myId');

console.log(div.getAttribute("some_atr"));	// some_value
div.setAttribute("some_atr", "new_value");
console.log(div.getAttribute("some_atr"));	// new_value

div.setAttribute('AnotherAtr', 'AnotherValue');
console.log(div.getAttribute('AnotherAtr'));	// AnotherValue

// All manually assigned attrs can be accessed using tag.attributes:
for (let atr of div.attributes) {
	console.log(atr);			// id="myId"...
	console.log(typeof atr);	// object
};


// Custom attributes can be used for example this way:
// We will set cell's color as tag's attribute, and will then use it, to set it's actual color:
for(let cell of document.querySelectorAll('[cell-red]')) {	// Selecting all cells with this custom atr, that yet does nothing
	let attr = cell.getAttribute('cell-red');	// Getting this atr's value (which is its color)
    cell.style.background = attr;				// Setting this value as a color
}

// It is recommended to use prefix 'data-...' for every custom attribute
// All atrs with that prefix become available with this:
for(let cell of document.querySelectorAll('[data-cell-red]')) {
    cell.dataset.cellRed = 'lightRed';		// Note that initial name was 'data-cell-red', but it was automatically changed to 'cellRed'
}
