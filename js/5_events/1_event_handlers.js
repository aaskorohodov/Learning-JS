/*
Events:

- mouse click
- mouse move
- keyboard click
- when HTML is fully loaded
*/

// Simple function, that can be in hTML itself
function showMessage() {
    alert("Hello!");
}

// Setting event in JS
let inp = document.querySelector("input");
inp.onclick = showMessage;

// Deleting event:
let link = document.getElementById("link")
link.onclick = null;
inp.onclick = null;

// Each function, that is set as event, have a link to its tag:
function ShowName() {
	console.log(this.tagName);	// Will display tag's name, which used this function
}
link.onclick = ShowName;


// Another way of setting event. This way, several events can be set:
function showMouseCoords(event) {
	// Prints coordinates of a mouse, when event was triggered
	console.log(event.clientX, event.clientY);
}

inp.addEventListener("click", showMouseCoords);
inp.addEventListener("click", ShowName);

// To remove such event:
inp.removeEventListener("click", ShowName);


// If event triggers animation as well, there is an option to execute this event after animation ended:
// Setting animation class to be triggered when clicked:
inp.addEventListener('click', function() {
	inp.classList.add('expand');
})
// Setting event, that will be executed, when animation will be completed:
inp.addEventListener('transitionend', showMessage);
// Note that argument 'transitionend' => transition + end, not 'transition + ed'


// JS's object's methods and classes can be set as event as well. In this case their method will be called:
let handleEvent = {
	myMethod(event) {
		console.log(event.type);
	}
};
inp.addEventListener('click', handleEvent.myMethod, event);

// Only the method with the name 'handleEvent' will be triggered, because JS will set it automatically by this specific name:
class MyHandler {
    handleEvent(event) {
        console.log('class');		// Will be triggered
    }

    handleEvent1(event) {
        console.log('class2');		// Will not be triggered
    }
}
 
inp.addEventListener("click", new MyHandler());
