/*
new Map() – creates map;
map.set(key, value) – sets a pair;
map.get(key) – returns value or undefined;
map.has(key) – returns true, if key exists, otherwise false;
map.delete(key) – deletes a pair;
map.clear() – clears collection;
map.size – returns current number of pairs.
*/


let m = new Map();
 
m.set("string", "value");
m.set(7, "simple number");
m.set(true, {description: "boolean", value: true});
 
console.log(m.get("string"));	// value
console.log(m.get(7));			// simple number
console.log(m.get(true));		// {description: 'boolean', value: true}


// objects can be keys as well, why not:
let user = {
    name: "JavaScript",
    type: "ES6"
};
m.set(user, "user_data");
console.log(m.get(user));	// user_data


// Maps can be created using Arrays:
let car = new Map([
         ["model", "Opel"],
         ["color", 0xff],
         ["price", 1000]
    ]);
console.log(car);	// {'model' => 'Opel', 'color' => 255, 'price' => 1000}


// We can also create maps from objects:
let book = {
    author: "Pushkin",
    title: "Onegin",
    pages: 100,
    price: 80
};
let lib = new Map(Object.entries(book));
console.log(lib);	// {'author' => 'Pushkin', 'title' => 'Onegin', 'pages' => 100, 'price' => 80}



// We can iterate over Maps:
lib.forEach(function(value, key, originalMap) {
	console.log(value, key)
});