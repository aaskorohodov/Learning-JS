// Getting element by its ID
let divElem = document.getElementById('div_id');
console.log(divElem);

// It's possible to get link to the element using ID directly:
console.log(div_id);
let some_div = div_id;
console.log(some_div);


// Finding element using CSS-Selectors:
let some_list = document.querySelectorAll('ul > li');
console.log(some_list);

// To get only the first matching element:
let first_li = document.querySelector('ul > li');
console.log(first_li);


// Filtering elements, using match
let list = document.querySelectorAll("ul.stars-list > li");
for(let item of list) {
	if(item.matches("li.star")) {
		console.log(item);
	}
}

// Finding the closest ancestor with desired selector:
let li = document.querySelector("li.star");
console.log(li.closest('.stars-list'));
console.log(li.closest('.content-table'));
console.log(li.closest('h1')); 		// null -> because it's not an ancestor



// Checking if an element is inside some other element:
let div = document.querySelector("div.content-table");
let ul = document.querySelector("ul.stars-list");
 
if(div.contains(ul)) {
	console.log("ul is inside div");
 }