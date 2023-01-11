// GLOBAL VARIABLES
const myLibrary = []; // contains books as objects
let bookNum = 1

const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const addButton = document.querySelector('#add-book');
const form = document.querySelector('form');
const bookIdNumber = document.querySelector('.book-id');


// FUNCTIONS


// Functions related to storing book data
function setBookIdMessage() {
    bookIdNumber.innerText = `This will be Book ${bookNum}`    
}


function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
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


// Functions related to display
function hideModal() {
    modal.style.display = 'none';
}




// EVENT LISTENERS

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    setBookIdMessage()})

closeModal.addEventListener('click', hideModal())

addButton.onclick = (e) => {
    e.preventDefault()
    addBookToLibrary(createNewBook())
    hideModal()
    form.reset()
    bookNum += 1 // increment book id number
}