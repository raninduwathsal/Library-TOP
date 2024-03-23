


// WORKING OF ALL THE BUTTONS IN THE PAGE

const addBookBtn = document.querySelector("#add-book-button");
const bookForm = document.querySelector("form");
const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton")
const bookFormDiv = document.querySelector("#form-div");

function showBookForm(){
    bookFormDiv.classList.remove("hidden");
    bookFormDiv.setAttribute("class", "shown");
}
function hideBookForm(){
    bookFormDiv.classList.remove("shown");
    bookFormDiv.setAttribute("class", "hidden");
}



addBookBtn.addEventListener("click", showBookForm);
submitButton.addEventListener("click", hideBookForm);
cancelButton.addEventListener("click", hideBookForm);

const myLibrary = [];  //Array that holds all of the books on the page
const booksAdded = [];
// Parsing all the buttons and inputs
const submitBtn = document.querySelector("#submitButton");``
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const deleteBtns = document.querySelectorAll(".delete");
const statusBtns = document.querySelectorAll(".status");
// Parsing all the divs 
const parentBookDiv = document.querySelector("#my-books");


// BOOKS CONSTRUCTOR FUNCTION
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    let read;
    if(isRead){
        read = "Read";
    }
    else if(!isRead){
        read = "not read yet"; 
    }
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages}, ${read}`);
    };
};

// BOOK PARSING FUNCTION
function addBookTolibrary(){
    const read = document.querySelector(".isRead").checked;
    let newBook = new Book(title.value, author.value, pages.value, read);
    myLibrary.push(newBook);  //Pushes the book into the my library array
    pages.value = "";
    title.value = "";
    author.value ="";
}

// Changes Status
function statusBook(e){
    let statusId = this.getAttribute("data-book");
    let changingStatus = document.getElementById(statusId);
    let status = changingStatus.querySelector(".book-is-read");
    console.log(status);
    if(status.textContent == "Read"){
        status.textContent = "Not Read";
    }else{
        status.textContent = "Read";
    }
}



// Deletes Book
function deleteBook(e){
    let deleteId = this.getAttribute("data-book");
    let deletingItem = document.getElementById(deleteId);
    deletingItem.remove();
}


// Adds Books to Dom
function pushInDom(){
    for (let i = 0; i<myLibrary.length; i++){

        // Checks if the books is already added and if it is added it skips over
        if(booksAdded.includes(myLibrary[i].title)){
            continue;
        }

        // Creating parent book Div
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "book");
        bookDiv.setAttribute("id", `b${i}`);


        // Creating child elements and adding text to it
        let booktitle = document.createElement("h1");
        booktitle.setAttribute("class", "book-title");
        booktitle.textContent += myLibrary[i].title;

        let bookAuthor = document.createElement("p");
        bookAuthor.setAttribute("class", "book-author");
        bookAuthor.textContent += myLibrary[i].author;

        let bookPages = document.createElement("p");
        bookPages.setAttribute("class", "book-pages");
        bookPages.textContent += myLibrary[i].pages;

        let bookRead = document.createElement("p");
        bookRead.setAttribute("class","book-is-read");
        let bookStatus = document.createElement("button");
        bookStatus.setAttribute("class", "status");
        bookStatus.setAttribute("data-book", `b${i}`)
        if(myLibrary[i].isRead == true){
            bookRead.textContent += "Read";
            bookStatus.textContent += "Mark Unread"
        }else{
            bookRead.textContent += "Not read";
            bookStatus.textContent+="Mark Read";
        }
        bookStatus.addEventListener("click", statusBook);

        let bookDelete = document.createElement("button");
        bookDelete.setAttribute("class", "delete");
        bookDelete.setAttribute("data-book", `b${i}`)
        bookDelete.textContent += "Delete";
        bookDelete.addEventListener("click", deleteBook);
        
        
        

        bookDiv.appendChild(booktitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        bookDiv.appendChild(bookStatus);
        bookDiv.appendChild(bookDelete);
        parentBookDiv.appendChild(bookDiv);

        booksAdded.push(myLibrary[i].title);
    }
};
// this function is not complete yet to be implemented in the future a search function
function search(name){
    for(let i ;i<myLibrary.length;i++){
        if(myLibrary[i].title == name){
            return `b${i}`;
        }
    }
}


// EVENT LISTENERS
submitBtn.addEventListener("click", addBookTolibrary);
submitBtn.addEventListener("click", pushInDom);
for(let i = 0; i<deleteBtns.length; i++){
    deleteBtns[i].addEventListener("click", deleteBook);
}
for(let i = 0; i<deleteBtns.length; i++){
    statusBtns[i].addEventListener("click", statusBook);
}
