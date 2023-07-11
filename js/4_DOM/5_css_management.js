// Getting CSS-class-name
let elem = document.querySelector("div.msg");
console.log(elem.className);

// Getting specific CSS-attribute from inline-styles
let elem2 = elem.nextSibling.nextSibling;	// 2 times, because there is also \n
console.log(elem2.style.top);

// If element's styles are set in HTML or CSS, that accessing them looks like so:
let objStyles = getComputedStyle(elem);
console.log(objStyles.width);
// Otherwise there will an empty string

// Setting new class-name for element:
elem2.className = 'msg'

// Adding style-extension:
elem2.classList.add('extension')

// Setting new styles:
let coordY = 0;
let idMove = setInterval(function() {
       coordY += 5;
       elem2.style.top = coordY+"px";
}, 50);
setTimeout(()=>clearInterval(idMove), 3000);