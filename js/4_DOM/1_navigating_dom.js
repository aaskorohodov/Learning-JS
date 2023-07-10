// This is how to get All elements from HTML-page
let html = document.documentElement;
let body = document.body;
let head = document.head;
console.log(html, body, head);



console.log('---------');

// This is how get access to all children of some HTML-element:
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}


console.log('-------------');

// The same iteration:
for (let child of document.body.childNodes) {
    console.log(child);
}


console.log('-------------');
// We can get first and last element of some HTML-Tag:
let first = html.firstChild;
let last = html.lastChild;

console.log(first);		// <head>...
console.log(last);		// <body>...