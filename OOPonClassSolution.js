
let myLibrary = [];

function Book(title, author, pages, pubDate, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.pubDate = pubDate
    this.readStatus = readStatus
}

Book.prototype.addBookToLibrary = function (book) {
    myLibrary.push(book)
}

const lib = new Book("Ikigai", "Hector Gracia", "190", "2016", false)
console.log(lib.title)
lib.addBookToLibrary(lib)
console.log(myLibrary[0])