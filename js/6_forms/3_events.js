// Event, that works only when form changes its content and looses its focus:
let form = document.forms[0];
form.user.onchange = function() {
	console.log(form.user.value);
}


// This one works each time, the content is changed, no matter what is with focus:
form.about.oninput = function() {
	console.log(form.about.value);
}


// Submit event:
form.onsubmit = function(event) {
	alert("Form sent");
}