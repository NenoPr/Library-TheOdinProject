"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.myLibrary = [];
  }

  _createClass(Library, [{
    key: "listBooks",
    value: function listBooks() {
      this.myLibrary.forEach(function (element) {
        return console.log(element["title"]);
      });
      console.log(this.myLibrary.length);
    }
  }, {
    key: "addBookToLibrary",
    value: function addBookToLibrary(book) {
      this.myLibrary.push(book);
    }
  }, {
    key: "readBookInfo",
    value: function readBookInfo(title) {
      var placeholder = [];
      var breakBool = false;
      this.myLibrary.forEach(function (element) {
        if (element["title"] == title && breakBool == false) {
          placeholder.push(element["title"]);
          placeholder.push(element["author"]);
          placeholder.push(element["pages"]);
          placeholder.push(element["pubDate"]);
          placeholder.push(element["readStatus"]);
          breakBool = true;
        }
      });
      return placeholder;
    }
  }, {
    key: "createNewBook",
    value: function createNewBook(array) {
      var ObjectPlaceholder = new Book(array[0], array[1], array[2], array[3], array[4]);
      this.addBookToLibrary(ObjectPlaceholder);
      this.appendNewBookToHTML(ObjectPlaceholder);
    }
  }, {
    key: "appendNewBookToHTML",
    value: function appendNewBookToHTML(book) {
      var _this = this;

      var bookInfoCopy = myLib.readBookInfo(book["title"]); // Create Book element and children

      var divElement = document.createElement("div");
      divElement.className += "book";
      divElement.id += bookInfoCopy[0];
      var pImage = document.createElement("div");
      pImage.className += "image";
      var pTitle = document.createElement("p");
      pTitle.textContent += bookInfoCopy[0];
      pTitle.className += "title" + Math.random(0, 10);
      var pAuthor = document.createElement("p");
      pAuthor.textContent += "Author: ";
      pAuthor.textContent += bookInfoCopy[1];
      pAuthor.className += "author";
      var pPages = document.createElement("p");
      pPages.textContent += "Pages: ";
      pPages.textContent += bookInfoCopy[2];
      pPages.className += "pages";
      var pPubDate = document.createElement("p");
      pPubDate.textContent += "Published Date: ";
      pPubDate.textContent += bookInfoCopy[3];
      pPubDate.className += "pubDate";
      var pReadStatus = document.createElement("p");
      pReadStatus.textContent += "Reading Status: ";
      pReadStatus.textContent += bookInfoCopy[4];
      pReadStatus.className += "readStatus";
      var changeReadStatus = document.createElement("div");
      changeReadStatus.className += "read-Status";
      changeReadStatus.id += bookInfoCopy[0] + "-id-" + Math.random(0, 10);
      changeReadStatus.setAttribute("data", bookInfoCopy[0]);
      changeReadStatus.textContent = "Change Read Status";
      var deleteButton = document.createElement("div");
      deleteButton.className += "delete-Button";
      deleteButton.id += bookInfoCopy[0] + "-id-" + Math.random(0, 10);
      deleteButton.textContent = "Delete Book";
      divElement.appendChild(pImage);
      divElement.appendChild(pTitle);
      divElement.appendChild(pAuthor);
      divElement.appendChild(pPages);
      divElement.appendChild(pPubDate);
      divElement.appendChild(pReadStatus);
      divElement.appendChild(pImage);
      divElement.appendChild(changeReadStatus);
      divElement.appendChild(deleteButton);
      docLibrary.appendChild(divElement); // Add Event Listeners on Buttons for Deleting books that were created after the initial ones --> always adds on the last book

      var counter = deleteBook.length - 1;
      deleteBook[counter].addEventListener('click', function (element) {
        _this.deleteBookFromHTML(element);
      }); // Add Event Listeners on Buttons for changing reading status on books that were created after the initial ones

      counter = changeReadStatusElement.length - 1;
      changeReadStatusElement[counter].addEventListener("click", function (event) {
        console.log("awfafw", changeReadStatusElement[0].parentNode);
        myLib.placeholderReadStatus(changeReadStatusElement[counter].parentNode);
      });
    }
  }, {
    key: "placeholderReadStatus",
    value: function placeholderReadStatus(node) {
      console.log("hit", node); // Create Read status window

      var divDisplayCover = document.createElement("div");
      divDisplayCover.id += "change-Read-Status-div";
      var divDisplay = document.createElement("div");
      divDisplay.id += "change-Read-Status-div";
      var pInfoChoose = document.createElement("p");
      pInfoChoose.textContent = "Change read Status to:";
      var divChangeToRead = document.createElement("div");
      divChangeToRead.id += "changeToRead";
      divChangeToRead.textContent = "Read";
      var divChangeToReading = document.createElement("div");
      divChangeToReading.id += "changeToReading";
      divChangeToReading.textContent = "Reading";
      var divChangeToNotRead = document.createElement("div");
      divChangeToNotRead.id += "changeToNotRead";
      divChangeToNotRead.textContent = "Read";
      var divCancelReadStatusChange = document.createElement("div");
      divCancelReadStatusChange.id += "cancelReadStatusChange";
      divCancelReadStatusChange.textContent = "Cancel";
      divDisplay.appendChild(pInfoChoose);
      divDisplay.appendChild(divChangeToRead);
      divDisplay.appendChild(divChangeToReading);
      divDisplay.appendChild(divChangeToNotRead);
      divDisplay.appendChild(divCancelReadStatusChange);
      node.appendChild(divDisplay);
      divDisplay.style.visibility = "unset";
      var changeToRead = document.getElementById("changeToRead");
      console.log("changetoread", changeToRead);
      changeToRead.addEventListener("click", function (event) {
        console.log(changeToRead.parentNode.parentNode);
        myLib.changeReadStatusFunc(changeToRead.parentNode.parentNode);
      });
    }
  }, {
    key: "deleteBookFromHTML",
    value: function deleteBookFromHTML(element) {
      var childForRemoval = document.getElementById(element.target.id);
      console.log(childForRemoval);
      childForRemoval.parentNode.parentNode.removeChild(childForRemoval.parentNode);
    }
  }, {
    key: "changeReadStatusFunc",
    value: function changeReadStatusFunc(element) {
      console.log("funcchec", element.childNodes[4].textContent);
      element.childNodes[4].textContent = "Reading Status: Read";
    }
  }]);

  return Library;
}();

var Book = function Book(title, author, pages, pubDate, readStatus) {
  _classCallCheck(this, Book);

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.pubDate = pubDate;
  this.readStatus = readStatus;
}; // Creates Links to elements for basic operations - link to the div that unset's hidden by button, the hidden div link, Get info from form, 


var newBookAddButton = document.getElementById("new-book");
var newBookDisplay = document.getElementById("pop-up");
var newBookForm = document.getElementById("form"); // Get The element where the books will bw added

var docLibrary = document.getElementById("library"); // Creates Book object and creates the Display for the book on DOM

var addBookButton = document.getElementById("add-Book"); // Create a Link to the class on every book that triggers the deletion of the book

var deleteBook = document.getElementsByClassName("delete-Button"); //#region ---- CHANGE READ STATUS ----
// Displays hidden div and links its activation to every status change div on every book

var changeReadStatusElement = document.getElementsByClassName("read-Status");
var changeReadStatusWindow = document.getElementById("change-Read-Status-div"); // Status Changes links to DOM

var cancelReadStatusChange = document.getElementsByClassName("cancelReadStatusChange"); //#region ---- CHANGE READ STATUS Extra Code ----
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

newBookAddButton.addEventListener("click", function (event) {
  newBookDisplay.style.visibility = "unset";
}); // Creates a new book on supplied information

addBookButton.addEventListener("click", function (event) {
  var bookInfoArray = [];

  for (var i = 0; i < newBookForm.elements.length; i++) {
    if (newBookForm.elements[i].value == "") return;
    bookInfoArray.push(newBookForm.elements[i].value);
  }

  bookInfoArray.forEach(function (element) {
    return console.log("bookInfoArray value check:", element);
  });
  myLib.createNewBook(bookInfoArray);
  newBookDisplay.style.visibility = "hidden";
}); // Create a Library Instance and insert Objects

var myLib = new Library();
var lib = new Book("Ikigai", "Hector Gracia", "190", "2016", "Reading");
console.log(lib.title);
myLib.addBookToLibrary(lib);
myLib.appendNewBookToHTML(lib);
lib = new Book("Ikigai u praksi", "Hector Gracia", "247", "2019", "Not Read");
console.log(lib.title);
myLib.addBookToLibrary(lib);
myLib.appendNewBookToHTML(lib);
lib = new Book("Besplatno", "Željko Ivanković", "320", "2018", "Reading");
console.log(lib.title);
myLib.addBookToLibrary(lib);
myLib.appendNewBookToHTML(lib);
lib = new Book("Nova Zemlja", "Eckhart Tolle", "265", "2019", "Reading");
console.log(lib.title);
myLib.addBookToLibrary(lib);
myLib.appendNewBookToHTML(lib);
lib = new Book("Unutarnje Inženjerstvo", "SadhGuru", "231", "2019", "Read");
console.log(lib.title);
myLib.addBookToLibrary(lib);
myLib.appendNewBookToHTML(lib); // ---- Old code for inserting data into DOM ----
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

console.log(myLib);