// Different mouse-events:
document.addEventListener("mouseup", () => console.log("mouseup"));
document.addEventListener("click", () => console.log("click"));
document.addEventListener("mousedown", () => console.log("mousedown"));
document.addEventListener("dblclick", () => console.log("dblclick"));

// We can get button, that was pressed:
// event.which == 1 – LMB;
// event.which == 2 – Middle MB;
// event.which == 3 – RMB;

document.addEventListener("mouseup", (event) => console.log("mouseup", event.which));

// We can also see, if there are some btns were pressed as well:
// event.shiftKey – true, if Shift else false;
// event.altKey – true if Alt (Opt for Mac) else false;
// event.ctrlKey – true if Ctrl else false;
// event.metaKey – true if Cmd (for Mac) else false;

// This will trigger if shift + ctrl + lmb
document.addEventListener("click", (event) => {
	if(event.shiftKey && event.ctrlKey) {
		console.log("shft ctrl");
	}
});


// Events for moving mouse:
document.addEventListener(
	"mousemove",
	(event)=>console.log("mousemove: "+event.clientX+", "+event.clientY)
	);


// Events, when mouse gets on top of some element, including body itself:
document.addEventListener("mouseover", (event)=>{
   let prop = `target = ${event.target.tagName}`;		// To where mouse get
   if (event.relatedTarget != null) {
      prop+=`, relatedTarget = ${event.relatedTarget.tagName}`;	// From where mouse got
      console.log(`mouseover: ${prop}`);
  }
});