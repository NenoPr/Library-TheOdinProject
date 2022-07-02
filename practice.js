class Library {
    constructor() {
        this.myLibrary = []
    }
    addBookToLibrary(book) {
        this.myLibrary.push(book)
    }
    readBookInfo(title) {
        let placeholder;
        this.myLibrary.forEach(element => {
            if (element["title"] == title) {
                placeholder = `${element["title"]} ${element["author"]} ${element["pages"]} ${element["pubDate"]} ${element["readStatus"]}`
            }
        });
        return placeholder;
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

lib = new Book("Ikigai u praksi", "Hector Gracia", "247", "2019", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)

lib = new Book("Besplatno", "Željko Ivanković", "320", "2018", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)

lib = new Book("Nova Zemlja", "Eckhart Tolle", "265", "2019", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)

lib = new Book("Unutarnje Injžinjerstvo", "SadgGuru", "231", "2019", false)
console.log(lib.title)
myLib.addBookToLibrary(lib)


let bookinfo = myLib.readBookInfo("Ikigai")
console.log(bookinfo)