/* eslint-disable no-plusplus */


// GLOBAL VARIABLES
const myLibrary = []; // contains book objects

let bookNum = 0; // Book number is displayed as 1, 2.. Book objects & its related DOM are based on zero-indexing.

const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const addButton = document.querySelector('#add-book');
const form = document.querySelector('form');
const bookIdNumber = document.querySelector('.book-id');
const libraryDisplay = document.querySelector('.library-display');



// FUNCTIONS


// Functions related to storing book data
function Book(name, author, pages, status) {
    this.name = name
    this.author = author
    this.pages = pages
    this.status = status
    this.bookId = bookNum
}

function createNewBook() {
    const newBook = new Book(
        form.elements[0].value, 
        form.elements[1].value, 
        form.elements[2].value, 
        form.elements.reading_status.value
        )
    return newBook
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function deleteFromLibrary(bookId) {
    // To maintain ordered book numbering, deleting a book object from myLibrary means we reassign that index to undefined
    if (confirm(`Delete ${myLibrary[bookId].name}?`)) {
        console.log(`Deleting ${myLibrary[bookId].name}`)
        myLibrary[bookId] = undefined
        deleteBookCard(bookId)
        console.log(myLibrary)
    }
}


// Functions related to display
function addDeleteBtnListener(btn) {
    btn.addEventListener('click', (e) => {
        deleteFromLibrary((e.target.className).slice(-1))
    })
}

function setBookIdMessage() {
    bookIdNumber.innerText = `This will be Book ${bookNum+1}`    
}

function hideModal() {
    modal.style.display = 'none';
}

function addButtons(newCard) {
    const btnArea = document.createElement('span'); 

    const editBtn = document.createElement('img');
    editBtn.src = "edit.svg";
    editBtn.classList.add('edit', `${bookNum}`);
    btnArea.appendChild(editBtn);

    const deleteBtn = document.createElement('img');
    deleteBtn.src = "delete.svg";
    deleteBtn.classList.add('delete', `${bookNum}`);
    addDeleteBtnListener(deleteBtn);
    btnArea.appendChild(deleteBtn);

    newCard.appendChild(btnArea);
}

function createBookCard(bookValues) {
    // create new div element, new span elements, then insert text in those span elements
    const newCard = document.createElement('div');
    newCard.classList.add(`book-${bookNum}`);
    libraryDisplay.appendChild(newCard);
    
    const bookName = document.createElement('span');
    const bookAuthor = document.createElement('span');
    const bookPages = document.createElement('span');
    const bookStatus = document.createElement('span');
    
    const element = [bookName, bookAuthor, bookPages, bookStatus];
    const attribute = ['name', 'author', 'pages', 'status'];

    for (let j = 0; j < 4; j++) {
        element[j].innerText = bookValues[j];
        element[j].classList.add(attribute[j]);
        newCard.appendChild(element[j]) 
    }
    addButtons(newCard);
}

function deleteBookCard(bookId) {
    const bookDiv = document.querySelector(`div.book-${bookId}`)
    bookDiv.remove()
}

// EVENT LISTENERS

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    setBookIdMessage()}
)

closeModal.addEventListener('click', () => {hideModal()})


addButton.onclick = (e) => {
    e.preventDefault()
    addBookToLibrary(createNewBook())
    createBookCard(Object.values(myLibrary[myLibrary.length-1]))
    hideModal()
    form.reset()
    bookNum++ // increment book id number
}



// SAMPLE BOOK ENTRIES

const myBook1 = ['Psychology of Money', 'Morgan Housel', 256, 'Want to Read']
const myBook2 = ['The Alchemist', 'Paulo Coelho', 175, 'Completed']
myLibrary.push(new Book(myBook1[0], myBook1[1], myBook1[2], myBook1[3]))
bookNum++
myLibrary.push(new Book(myBook2[0], myBook2[1], myBook2[2], myBook2[3]))
bookNum++
console.log(myLibrary)

// event listener for sample books. temporary.

const editBookBtn = document.querySelectorAll('.edit');
const deleteBookBtn = document.querySelectorAll('.delete');

deleteBookBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
    deleteFromLibrary((e.target.className).slice(-1))
    })
})
