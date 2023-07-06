// Factory's name MUST start with Upper-case
function Book(title, author, price) {
	this.title = title;
	this.author = author;
	this.price = price;
}

let book = new Book('Title', 'Author', 100);
let book2 = new Book('Title_2', 'Author_2', 150);
console.log(book);
console.log(book2);


// Object can also be created with anonymous-function
let car = new function() {
    this.model = "Reno";
    this.go = function() {
       console.log("Car goes");
    }
}
console.log(car)