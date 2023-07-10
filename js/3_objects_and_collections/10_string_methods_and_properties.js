// Possible quotes

let str1 = "Hello World!";
let str2 = 'Hello World!';
let str3 = `Hello World!`;

// Special Symbols
/*

\n – new line;
\r – carriage return;
\t – Tab;
\uXXXX – UTF-16;
\"  and  \' –  escaping;
\\ - backslash.

*/


let str = 'Hello!\nI\'m JavaScript.\n \t Tab, backslash \\ and \u00A9';
console.log(str);
console.log(str.length);

let ch1 = str[0];
console.log(ch1); 	// H
ch1 = str.charAt(0);
console.log(ch1); 	// H

new_string = ''
for (let el of str) {
	new_string += el;
};
console.log(new_string);		// 'Hello!\nI\'m JavaScript.\n \t Tab, backslash \\ and \u00A9';

str = 'Hello!'
console.log(str.toLowerCase());	// hello!
console.log(str.toUpperCase()); // HELLO!



// 		-- infexOf, lastIndexOf --

str = '<span class="clock">12:34</span>';
let indx1 = str.indexOf("clock");          // 13
let indx2 = str.indexOf("span", 2);        // 27 -> because we indicated to search for the second one
let indx3 = str.indexOf("div");            // -1
 
console.log(indx1, indx2, indx3);



// 		-- includes, startsWith, endsWith --

str = '<span class="clock">12:34</span>';
console.log(str.includes("span"));		// true
console.log(str.includes("<span>"));	// false
console.log(str.includes("clock", 20));	// false -> starting with index 20

str = '<span class="clock">12:34</span>';
console.log(str.startsWith("span"));    //false
console.log(str.startsWith("<span"));	//true
console.log(str.endsWith("span>"));     //true





// 		-- slice --

str = '<span class="clock">12:34</span>';
console.log(str.slice(0, 5));         //<span
console.log(str.slice(6, 11));        //class
console.log(str.slice(12));           //"clock"...
console.log(str.slice(-7, -1));       //</span




//		-- trim --

str = '   string   ';
console.log(str.trim());	// 'string'



//		-- repeat --
str = 'a';
console.log(str.repeat(5));		// aaaaa