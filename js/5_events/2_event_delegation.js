// This is how to set 1 event to all <li>:

// Creating an abject, that will be responsible for concrete method for concrete li-element:
menuActions = {
	open() {
		console.log('Open event');
	},
	save() {
		console.log('Save')
	}
}

function li_selector(event) {
	let li = event.target.closest('li');		// Selecting closest, in case User click in between li
	if(li == null) return;						// If completely missed
	li_text = li.innerHTML.toLowerCase();		// Getting text
	console.log(li_text);
	if (li_text && menuActions[li_text] !== undefined) {	// Checking, if such method exists in menuActions, and calling it
		menuActions[li_text]();
	}
};

let main_menu = document.getElementById('main_menu');
main_menu.addEventListener("click", li_selector);

