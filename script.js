let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        pages: 299,
        read: true
    },
    {
        title: 'Lord of the Rings',
        author: 'Tolkien',
        pages: 500,
        read: false
    }
]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const addBookToLibrary = book => {
    myLibrary.push(book)
}

const listBooks = () => {
    clearBooks()
    const list = document.querySelector('.book-list')
    for (let book of myLibrary) {
        const card = document.createElement('div')
        card.classList.add('book')
        const title = document.createElement('h2')
        title.classList.add('title')
        title.innerText = book.title
        card.appendChild(title)
        const author = document.createElement('h4')
        author.classList.add('author')
        author.innerText = book.author
        card.appendChild(author)
        const pages = document.createElement('p')
        pages.classList.add('pages')
        pages.innerText = `${book.pages} pages`
        card.appendChild(pages)
        const read = document.createElement('p')
        read.classList.add('read')
        read.innerText = book.read ? 'Read' : 'Not read'
        card.appendChild(read)
        list.append(card)
    }
}

clearBooks = () => {
    const books = document.querySelectorAll('.book-list>*')
    books.forEach(b => b.remove())
}

const openNewBookForm = () => newBookForm.classList.add('active')
const closeNewBookForm = () => newBookForm.classList.remove('active')
const addNewBook = () => {
    inputs = document.forms['new-book-form']
    const book = new Book(inputs.title.value, inputs.author.value, inputs.pages.value, inputs.read.checked)
    myLibrary.push(book)
    closeNewBookForm()
    listBooks()
}

const newBookButton = document.querySelector('.new-book-button')
const newBookForm = document.querySelector('.modal.new-book')
const closeBookForm = document.querySelector('.close-new-book')
const addBookButton = document.querySelector('.add-book')
newBookButton.addEventListener('click', () => openNewBookForm())
closeBookForm.addEventListener('click', () => closeNewBookForm())
addBookButton.addEventListener('click', () => addNewBook())

listBooks()