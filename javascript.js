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
                placeholder.push(element["readStatus"])
                placeholder.push(element["imageLink"])
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

        // Create Book element and children
        let divElement = document.createElement("div");
        divElement.className += "book"
        divElement.id += bookInfoCopy[0]

        let pImage = document.createElement("div");
        pImage.className += "image"

        let pTitle = document.createElement("p");
        pTitle.textContent += bookInfoCopy[0]
        pTitle.className += "title"

        let pAuthorInfo = document.createElement("p");
        pAuthorInfo.textContent += ""
        pAuthorInfo.className = "authorInfo"

        let pAuthor = document.createElement("p");
        pAuthor.textContent += bookInfoCopy[1]
        pAuthor.className += "author"

        let pPages = document.createElement("p");
        pPages.textContent += bookInfoCopy[2] + " Pages"
        pPages.className += "pages"

        let pReadStatusInfo = document.createElement("p");
        pReadStatusInfo.textContent += ""
        pReadStatusInfo.className = "readInfo"


        let pReadStatus = document.createElement("p");
        pReadStatus.textContent += bookInfoCopy[3]
        pReadStatus.className += "readStatus"

        let changeReadStatus = document.createElement("div")
        changeReadStatus.className += "read-Status"
        changeReadStatus.id += bookInfoCopy[0]+"-id-"+Math.random(0,10)
        changeReadStatus.setAttribute("data", bookInfoCopy[0])
        changeReadStatus.textContent = "Change Read Status"

        let deleteButton = document.createElement("div");
        deleteButton.className += "delete-Button"
        deleteButton.id += bookInfoCopy[0]+"-id-"+Math.random(0,10)
        deleteButton.textContent = "Delete Book"


        divElement.appendChild(pImage)
        divElement.appendChild(pTitle)
        divElement.appendChild(pAuthorInfo)
        divElement.appendChild(pAuthor)
        divElement.appendChild(pPages)
        divElement.appendChild(pReadStatusInfo)
        divElement.appendChild(pReadStatus)
        divElement.appendChild(pImage)
        divElement.appendChild(changeReadStatus)
        divElement.appendChild(deleteButton)

        if (bookInfoCopy[4] != undefined) {
            console.log("Not null", divElement.childNodes[0])
            pImage.style.backgroundImage = "url("+bookInfoCopy[4]+")"
        }
        console.log("what",bookInfoCopy)


        docLibrary.appendChild(divElement);


        // Add Event Listeners on Buttons for Deleting books that were created after the initial ones --> always adds on the last book
        let counter = deleteBook.length - 1;
        deleteBook[counter].addEventListener('click', element => {
            this.deleteBookFromHTML(element)
        });

        // Add Event Listeners on Buttons for changing reading status on books that were created after the initial ones
        counter = changeReadStatusElement.length - 1;
        changeReadStatusElement[counter].addEventListener("click", event => {
            //send the functions pointer to its targets parent node
            myLib.placeholderReadStatus(event.target.parentNode)
        })

        if (pReadStatus.textContent == "Read"){
            pReadStatus.style.backgroundColor = "green"
        }
        if (pReadStatus.textContent == "Reading"){
            pReadStatus.style.backgroundColor = "rgb(0, 84, 136)"
        }
        if (pReadStatus.textContent == "Not Read"){
            pReadStatus.style.backgroundColor = "gray"
        }
        
    }

    placeholderReadStatus(node) {

        // ---- Create Read status window ----
        console.log("Noda:",node)

        // unset the visibility of the cover div that stops the interaction with the rest of the site
        changeReadStatusCover.style.visibility = "unset"
        //crete display
        let divDisplay = document.createElement("div")
        divDisplay.id += "change-Read-Status-div"
        //create the action info prompt 
        let pInfoChoose = document.createElement("p")
        pInfoChoose.textContent = "Change read Status to?"
        //create Read status div
        let divChangeToRead = document.createElement("div")
        divChangeToRead.id += "changeToRead"
        divChangeToRead.textContent = "Read"
        //create Reading status div
        let divChangeToReading = document.createElement("div")
        divChangeToReading.id += "changeToReading"
        divChangeToReading.textContent = "Reading"
        //create Not Read status div
        let divChangeToNotRead = document.createElement("div")
        divChangeToNotRead.id += "changeToNotRead"
        divChangeToNotRead.textContent = "Not Read"
        //create the Cancel action div
        let divCancelReadStatusChange = document.createElement("div")
        divCancelReadStatusChange.id += "cancelReadStatusChange"
        divCancelReadStatusChange.textContent = "Cancel"

        //append the created elements
        divDisplay.appendChild(pInfoChoose);
        divDisplay.appendChild(divChangeToRead);
        divDisplay.appendChild(divChangeToReading);
        divDisplay.appendChild(divChangeToNotRead);
        divDisplay.appendChild(divCancelReadStatusChange);
        
        node.appendChild(divDisplay);


        //Adds event Listeners to change the read status content and data on the current node
        let changeToRead = document.getElementById("changeToRead")
        changeToRead.addEventListener("click", event => {
            console.log("wewewewee",changeToRead.parentNode.parentNode)
            myLib.changeReadStatusFunc(node, "Read")
        })

        let changeToReading = document.getElementById("changeToReading")
        changeToReading.addEventListener("click", event => {
            console.log(changeToReading.parentNode.parentNode)
            myLib.changeReadStatusFunc(node, "Reading")
        })

        let changeToNotRead = document.getElementById("changeToNotRead")
        changeToNotRead.addEventListener("click", event => {
            console.log(changeToNotRead.parentNode.parentNode)
            myLib.changeReadStatusFunc(node, "Not Read")
        })

        let cancelReadStatusChange = document.getElementById("cancelReadStatusChange")
        cancelReadStatusChange.addEventListener("click", event => {
            console.log(cancelReadStatusChange.parentNode.parentNode)
            myLib.changeReadStatusFunc(node, "Cancel")
        })
    }

    changeReadStatusFunc(node, action) {
        //Changes the read content on the website
        if (action == "Read"){
            console.log("node.childNodes",node.childNodes)
            node.childNodes[5].textContent = "Read"
            node.childNodes[5].style.backgroundColor = "green"
        }
        if (action == "Reading"){
            node.childNodes[5].textContent = "Reading"
            node.childNodes[5].style.backgroundColor = "orange"
        }
        if (action == "Not Read"){
            node.childNodes[5].textContent = "Not Read"
            node.childNodes[5].style.backgroundColor = "gray"
        }
        //changes read status on the myLibrary array
        if (action != "Cancel"){
            for (let i = 0;i<myLib.myLibrary.length;i++) {
                if(myLib.myLibrary[i]["title"] == node.childNodes[0].textContent) {
                    myLib.myLibrary[i]["readStatus"] = action
                }
            }
        }
        //removes the change status window and sets the cover back to invisible
        node.removeChild(node.childNodes[9])
        changeReadStatusCover.style.visibility = "hidden"
    }

    deleteBookFromHTML(element) {
        // gets the element from the pointer passed to the function
        let childForRemoval = document.getElementById(element.target.id)
        //finds the object that shares the title and deletes it
        for (let i = 0;i<myLib.myLibrary.length;i++) {
            if(myLib.myLibrary[i]["title"] == childForRemoval.parentNode.childNodes[0].textContent) {
                myLib.myLibrary.splice(i, 1)
            }
        }
        //removes the book from the DOM
        childForRemoval.parentNode.parentNode.removeChild(childForRemoval.parentNode);
    }
}


class Book {
    constructor(title, author, pages, readStatus, imageLink) {
        this.title = title
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
        this.imageLink = imageLink
    }
}


// Creates Links to elements for basic operations - link to the div that unset's hidden by button, the hidden div link, Get info from form, 
const newBookAddButton = document.getElementById("new-book");
const newBookDisplay = document.getElementById("pop-up")
const newBookForm = document.getElementById("form");

// Get The element where the books will bw added
let docLibrary = document.getElementById("library");


// Creates Book object and creates the Display for the book on DOM
const addBookButton = document.getElementById("add-Book")
const cancelNewBook = document.getElementById("cancelNewBook")

// Create a Link to the class on every book that triggers the deletion of the book
let deleteBook = document.getElementsByClassName("delete-Button")


//#region ---- CHANGE READ STATUS ----

// Displays hidden div and links its activation to every status change div on every book
let changeReadStatusElement = document.getElementsByClassName("read-Status")
let changeReadStatusWindow = document.getElementById("change-Read-Status-div")
const changeReadStatusCover= document.getElementById("change-Read-Status-div-cover")

// Status Changes links to DOM
let cancelReadStatusChange = document.getElementsByClassName("cancelReadStatusChange")


//#region ---- CHANGE READ STATUS Extra Code ----
// let changeToRead = document.getElementById("changeToRead")

// Listens for event to hide the UI for Changing READ status on a book
// cancelReadStatusChange.addEventListener("click", event => {
//     changeReadStatusWindow.style.visibility = "hidden"
// })


// changeToRead.addEventListener("click", event => {
//     console.log(changeToRead.parentNode)
//     myLib.changeReadStatusFunc(changeToRead)
// })
//#endregion

//#endregion ---- CHANGE READ STATUS ----




// Listens for event to unhide the UI for inputting data for new book
newBookAddButton.addEventListener("click", (event) => {
    newBookDisplay.style.visibility = "unset";
    changeReadStatusCover.style.visibility = "unset"
})

// Creates a new book on supplied information
addBookButton.addEventListener("click", event => {

    let bookInfoArray = [];

    for (let i = 0; i < 4; i++) {
        if (newBookForm.elements[i].value == "") return
        bookInfoArray.push(newBookForm.elements[i].value)
        newBookForm.elements[i].value = ""
    }
    if (newBookForm.elements[4].value != "") {
        bookInfoArray.push(newBookForm.elements[4].value)
        newBookForm.elements[4].value = ""
    }

    bookInfoArray.forEach( element => console.log("bookInfoArray value check:",element))
    console.log(bookInfoArray)
    myLib.createNewBook(bookInfoArray);
    newBookDisplay.style.visibility = "hidden";
    changeReadStatusCover.style.visibility = "hidden";
    bookInfoArray = [];
})

cancelNewBook.addEventListener("click", event => {
    newBookDisplay.style.visibility = "hidden";
    changeReadStatusCover.style.visibility = "hidden";
})


// Create a Library Instance and insert Objects
const myLib = new Library;

for (let i = 0; i<5; i++)
{let lib = new Book("Ikigai", "Hector Gracia", "190", "Read", "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg")
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("Lunar Storm", "Terry Crosby", "247", "Reading" , "https://www.adobe.com/express/create/cover/media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02.jpeg?width=400&format=jpeg&optimize=medium")
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("The Book of Art", "Regina Phalange", "320", "Not Read" , "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198")
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("Secrets of the Silent Witch", "Matsuti Isora", "265", "Reading", "https://images-na.ssl-images-amazon.com/images/I/91Y9TOg10rL.jpg")
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("Solo Leveling", "Chugong", "231", "Not Read", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619952571l/56817438.jpg")
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("The Art og Guweiz", "GUWEIZ", "142", "Read", "https://japanese-creative-books.com/wp-content/uploads/2021/09/The-Art-of-GUWEIZ.jpeg")
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)

lib = new Book("A Complete Overview on Web-Development", "Ayush Mauryavanshi", "246", "Reading", "https://images-na.ssl-images-amazon.com/images/I/61rkWdRWGSL.jpg")
console.log(lib.title)
myLib.addBookToLibrary(lib)
myLib.appendNewBookToHTML(lib)}

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

// ---- Old function for changing read status... ----
//changeReadStatusFunc(element) {
    // console.log(myLib.listBooks())
    // console.log(myLib.myLibrary[0]["title"])
    // console.log("length:",docLibrary.childNodes.length)
    // console.log("heyx",docLibrary.childNodes[3].childNodes[6].attributes.data.value)
    // console.log("The element data value:",element[0].attributes.data.value)

    // for (let i=0;i<docLibrary.childNodes.length;i++) {
    //     if (docLibrary.childNodes[i].childNodes[6] == element[0]) {
    //         console.log("Hit!")
    //         console.log(docLibrary.childNodes[i].childNodes[4].textContent = "Reading Status: Read")
    //     }
    // }

    // console.log(myLib.myLibrary[0]["readStatus"])
    // for (let i=0;i<myLib.myLibrary.length;i++) {
    //     if (myLib.myLibrary[i]["title"] == element[0].attributes.data.value) {
    //         console.log("Hit! Lib!")
    //         myLib.myLibrary[i]["readStatus"] = "Read"
    //     }
    // }
    // console.log(myLib.myLibrary[0]["readStatus"])
//}

console.log(myLib)