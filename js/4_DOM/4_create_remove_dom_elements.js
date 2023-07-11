// Creating new element
let div = document.createElement('div');
div.className = "msg";
div.innerHTML = "Important info!";
document.body.append(div);

// Adding elements before or after some other element:
let list = document.querySelector("ul");	// Getting some element from HTML
list.before('before');						// Adding line before it
list.after('after');						// Adding line after it


// Adding children-elements:
let li_1 = document.createElement('li');
li_1.innerHTML = "First element";
list.prepend(li_1);		// Adding as first child
let li_2 = document.createElement('li');
li_2.innerHTML = "Last element";
list.append(li_2);		// Adding as last child


// Replacing elements:
let my_div = document.getElementById('SomeDiv')
my_div.replaceWith(
	document.createElement("hr"),			// hr is a line (----------... line)
	"Some text, that replaced some div",	// This text will be created with out any tags, just as text
	document.createElement("br")			// br is a new line
	)


// Methods append/prepend/before/after can also delete elements, if they are called on an existing element.
// For example, we can 'move' elements this way, by selecting existing element and placing it again with append:
let liSun = document.getElementById("Sun");
console.log(liSun);
list.append(liSun);


// Another way of adding elements:
list.insertAdjacentHTML("beforebegin", "<br>List of planets<hr>");	// before element
list.insertAdjacentHTML("afterend", "<hr>End list");				// after element
list.insertAdjacentHTML("afterbegin", "<li>First Child");			// as first child
list.insertAdjacentHTML("beforeend", "<li>Last Child");				// as last child



// Deleting elements:
let idRemove = setInterval(function() {
    let li = document.querySelector("ul > li:last-child");
    console.log(li)
    if(li === null) {
       clearInterval(idRemove);
    }
    else {
    	li.remove();
    }
}, 500);




// Cloning elements:
let t = document.querySelector('table')								// Selecting table
let tb = document.querySelector('table > tbody')					// Selecting tbody-tag
let r = document.querySelector('table > tbody > tr:last-child')		// Selecting last row

let row = r.cloneNode(true);
row.querySelector('td:first-child').innerHTML = "Venus";
tb.append(row);




// Adding part of HTML-document:
let fragment = new DocumentFragment();
let my_list = ["Mercury", "Venus", "Earth", "Mars"];
for (let p of my_list) {
	let item = document.createElement('li');
	item.innerHTML = p;
	fragment.append(item);
}
let emptyList = document.getElementById('emptyList');
emptyList.append(fragment);