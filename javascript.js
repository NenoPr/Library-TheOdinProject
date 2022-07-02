class Library {
    constructor() {
        this.myLibrary = []
    }
    listBooks() {
        this.myLibrary.forEach( element => console.log(element["title"]))
        console.log(this.myLibrary.length)
    }
    addBookToLibrary(book) {
        this.myLibrary.push(book)
    }
    readBookInfo(title) {
        let placeholder = [];
        let breakBool = false;
        this.myLibrary.forEach(element => {
            if (element["title"] == title && breakBool == false) {
                placeholder.push(element["title"])
                placeholder.push(element["author"])
                placeholder.push(element["pages"])
                placeholder.push(element["pubDate"])
                placeholder.push(element["readStatus"])
                breakBool = true;
            }
        });
        return placeholder;
    }
    createNewBook(array) {
        let ObjectPlaceholder = new Book(array[0],array[1],array[2],array[3],array[4]);
        this.addBookToLibrary(ObjectPlaceholder);
        this.appendNewBookToHTML(ObjectPlaceholder)
    }
    appendNewBookToHTML(book) {
        let bookInfoCopy = myLib.readBookInfo(book["title"]);

        let divElement = document.createElement("div");
        divElement.className += "book"
        console.log("test0")

        let pTitle = document.createElement("p");
        pTitle.textContent += "Title: "
        pTitle.textContent += bookInfoCopy[0]
        pTitle.className += "title"
        console.log("test1")

        let pAuthor = document.createElement("p");
        pAuthor.textContent += "Author: "
        pAuthor.textContent += bookInfoCopy[1]
        pAuthor.className += "author"
        console.log("test2")


        let pPages = document.createElement("p");
        pPages.textContent += "Pages: "
        pPages.textContent += bookInfoCopy[2]
        pPages.className += "pages"

        let pPubDate = document.createElement("p");
        pPubDate.textContent += "Published Date: "
        pPubDate.textContent += bookInfoCopy[3]
        pPubDate.className += "pubDate"

        let pReadStatus = document.createElement("p");
        pReadStatus.textContent += "Reading Status: "
        pReadStatus.textContent += bookInfoCopy[4]
        pReadStatus.className += "readStatus"

        divElement.appendChild(pTitle);
        divElement.appendChild(pAuthor)
        divElement.appendChild(pPages)
        divElement.appendChild(pPubDate)
        divElement.appendChild(pReadStatus)

        let docLibrary = document.getElementById("library");
        docLibrary.appendChild(divElement);
    }
    
}

class Book {
    constructor(title, author, pages, pubDate, readStatus) {
        this.title = title
        this.author = author
        this.pages = pages
        this.pubDate = pubDate
        this.readStatus = readStatus
    }
}

const myLib = new Library;

let lib = new Book("Ikigai", "Hector Gracia", "190", "2016", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("Ikigai u praksi", "Hector Gracia", "247", "2019", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("Besplatno", "Željko Ivanković", "320", "2018", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("Nova Zemlja", "Eckhart Tolle", "265", "2019", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("Unutarnje Inženjerstvo", "SadgGuru", "231", "2019", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

// ---- Old code for inserting data into DOM ----

// let bookInfo = myLib.readBookInfo("Ikigai")
// bookInfo.forEach(element => console.log(element))


// let docLibrary = document.getElementById("library");
// let divElement = document.createElement("div");


// bookInfo.forEach(element => {
//     let pElement = document.createElement("p");
//     pElement.textContent = element
//     let divElement = document.createElement("div");
//     divElement.className += "book"
//     divElement.appendChild(pElement);
//     docLibrary.appendChild(divElement);
// })

// ---- Old code for inserting data into DOM ----

const newBookAddButton = document.getElementById("new-book-submit-button");
const newBookForm = document.getElementById("form");

newBookAddButton.addEventListener("click", (event) => {

    let bookInfoArray = [];

    for (let i = 0; i < newBookForm.elements.length; i++) {
        if (newBookForm.elements[i].value == "") return
        bookInfoArray.push(newBookForm.elements[i].value)
    }
    bookInfoArray.forEach( element => console.log("bookInfoArray value check:",element))
    myLib.createNewBook(bookInfoArray);
})