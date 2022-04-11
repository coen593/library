let myLibrary = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const addBookToLibrary = book => myLibrary.push(book)

const listBooks = () => {
    clearBooks()
    const list = document.querySelector('.book-list')
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        const card = document.createElement('div')
        card.classList.add('book')
        card.setAttribute('id', i)

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

        const buttons = document.createElement('div')
        buttons.classList.add('buttons')

        const readButton = document.createElement('button')
        readButton.classList.add('btn')
        readButton.classList.add('read')
        if (book.read) {
            readButton.classList.add('has-read')
        } else {
            readButton.classList.add('not-read')
        }
        readButton.innerText = book.read ? 'Read' : 'Not read'
        readButton.setAttribute('id', i)
        buttons.appendChild(readButton)

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('btn')
        deleteButton.classList.add('delete')
        deleteButton.innerText = 'Delete'
        deleteButton.setAttribute('id', i)
        buttons.appendChild(deleteButton)

        if (book.read) {
            card.classList.add('has-read')
        } else {
            card.classList.add('not-read')
        }
        card.append(buttons)
        list.append(card)
        deleteButton.addEventListener('click', function() {handleDelete(this.id)})
        readButton.addEventListener('click', function() {handleReadButton(this.id)})
    }
}

const handleDelete = id => {
    myLibrary.splice(id, 1)
    listBooks()
}

const handleReadButton = id => {
    myLibrary[id].read = !myLibrary[id].read
    listBooks()
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