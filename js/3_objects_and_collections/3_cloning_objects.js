let book = {
    title: "SomeTitle",
    author: "SomeAuthor",
    nPages: 0,
    price: 0,
};

// How to clone an abject with primitive data-types inside:
clone = {}
for (let key in book) {
    clone[key] = book[key];
}
console.log(book)
console.log(clone)
console.log(book == clone);     // -> false
console.log(book === clone);    // -> false


// Cloning inner objects
let book_2 = {
    title: "SomeTitle",
    author: "SomeAuthor",
    nPages: 0,
    price: 0,
    size: {height: 100, width: 50}
};

function cloneDeepObj(dest, obj) {
    // dest -> to where copying
    // obj  -> from where

    for (let key in obj) {
       if((typeof obj[key]) == "object") {
           dest[key] = cloneDeepObj({}, obj[key]);
       }
       else {
           dest[key] = obj[key];
       }
    }
    return dest;
}
clone_2 = {}
clone_2 = cloneDeepObj({}, book_2)
console.log(clone_2)
console.log(book_2)
