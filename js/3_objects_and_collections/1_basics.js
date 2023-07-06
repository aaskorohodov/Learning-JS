// Basic object creation:
let book = {
    title: "My title",
    author: "My author",
    nPages: 0,
    price: 0
};

console.log(book.title);        // -> My title
console.log(book.price);        // -> 0
console.log(book['nPages']);    // -> 0

// Adding new attribute:
book.isSelled = false;
console.log(book.isSelled);  // -> false

// Changing attribute:
book.isSelled = true;
console.log(book.isSelled); // -> true

// Accessing non-existing attributes will not result an error
console.log(book.nonExistingAttribute); // -> undefined

// Deleting attribute:
delete book.isSelled;
console.log(book.isSelled); // -> undefined

// Checking for attribute-existence
console.log('isSelled' in book) // -> false
console.log('title' in book)    // -> true
if (book.isSelled === undefined) {
    console.log('Non-existing property!')
}


// Creating an empty object:
let book2 = {};
let book3 = new Object();



// We can add attributes this way:
let newKey = 'color';
let car2 = {
    model: 'Toyota',
    [newKey]: 'black',
    [newKey+'OfTheCar']: 'black'
}
console.log(car2[newKey]);          // -> black
console.log(car2.color);            // -> black
console.log(car2.colorOfTheCar);    // -> black



// Objects can be created inside functions:
function CarFactory(model, color){
    return {
        model: model,
        color: color
    }
}
car_3 = CarFactory('Jeep', 'Green')
console.log(car_3.model);    // -> Jeep
console.log(car_3.color);    // -> Green


// Iterating over all pairs:
for (let key in book){
    console.log(`${key}: ${book[key]}`);
}


// Keys does not save their initial position. If keys are a numbers, they will be ordered DESC
let phoneCodes = {
    "7": "Nazi-Russia",
    "49": "Germany",
    "code": 'SomeVal',
    "41": "Switzerland",
    "1": "US"
};
 
for (let code in phoneCodes) {
    console.log(code);
}   // -> 1, 7, 41, 49, code


// Objects does not copy, like it would be with strings:
NewCodes = phoneCodes;
NewCodes['7'] = "Collapsed-Russia"
console.log(NewCodes['7']);      // -> Collapsed-Russia
console.log(phoneCodes['7']);    // -> Collapsed-Russia


// Constant-object can have their attributes changed:
const myBook = {
    title: 'SomeTitle'
}
myBook.title = 'AnotherTitle'
console.log(myBook.title);   // -> AnotherTitle


// This is how comparison works:
link = myBook
console.log(link == myBook);    // -> true
console.log(link === myBook);   // -> true
const book4 = {
    title: 'SomeTitle'
}
console.log(book4 == myBook);   // -> false
console.log(book4 === myBook);  // -> false