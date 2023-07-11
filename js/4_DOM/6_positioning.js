// Getting size of the element on the page
let elem = document.querySelector("div.message");
console.log(elem.clientWidth, elem.clientHeight);
// Consists of element's size + padding


// Scrolling:

/*
elem.scrollTop – block content scroll height;
elem.scrollLeft – the amount of content to scroll to the left side of the block;
elem.scrollWidth – scrollable content width;
elem.scrollHeight – scroll content height.
*/


let html = document.documentElement;

// Sizes without scrolling-bars:
console.log(html.clientWidth, html.clientHeight);

// Overall sizes, including all scrolls:
console.log(window.innerWidth, window.innerHeight);

// Sizes of the overall document, including the part, that is hidden from view-port:
console.log(window.innerWidth, window.innerHeight);


// Setting element to the center on view-port:
let wnd = document.getElementById("wnd");
let centerX = document.documentElement.clientWidth/2;
let centerY = document.documentElement.clientHeight/2;
wnd.style.left = centerX - wnd.offsetWidth/2 + "px";
wnd.style.top = centerY - wnd.offsetHeight/2 + "px";

// To get elements dimensions:
let coords = wnd.getBoundingClientRect();
console.log(coords);