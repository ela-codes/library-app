// GLOBAL VARIABLES
const myLibrary = []; // contains books as objects

const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const addButton = document.querySelector('#add-book');



// EVENT LISTENERS

openModal.addEventListener('click', () => {modal.style.display = 'block';})

closeModal.addEventListener('click', () => {modal.style.display = 'none';})

window.onclick = (e) => {
    if (e.target === modal) { modal.style.display = 'none'}
}

addButton.onclick = (e) => {
    e.preventDefault()
    addBookToLibrary(e)
}

// FUNCTIONS

function Book(name, author, pages) {
    this.name = name
    this.author = author
    this.pages = pages
}


function addBookToLibrary() {

}