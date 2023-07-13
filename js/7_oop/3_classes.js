class Book {
    some_default_atr = 123;
    constructor(title, author, price) {
        // Will be called, each time new object is created
        this.title = title;
        this.author = author;
        this.price = price;
    }
    getTitle() {
        return this.title;
    }
    setPrice(pr) {
        this.price = pr;
    }
};

let book1 = new Book('Title', 'Author', '1000');
console.log(book1);
console.log(book1.some_default_atr);    // 123

book1.setPrice(100500)
console.log(book1.price);       // 100500
console.log(book1.getTitle());  // Title

book2 = new Book('Another Title', 'Another Author', '555');
console.log(book2.price);       // 555
console.log(book1.price);       // 100500