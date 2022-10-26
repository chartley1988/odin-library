let library = document.getElementById("library")
let addBookModal = false; // Status whether modal is open or closed.

const openBookModal = document.getElementById("openBookModal");
openBookModal.addEventListener("click", toggleModal);
const closeAddBookModal = document.getElementById("close-modal")
closeAddBookModal.addEventListener("click", toggleModal);
const addBookButton = document.getElementById('add-book-button');
console.log(addBookButton);
addBookButton.addEventListener("click", addBookToLibrary);

let SampleBook = new Book("Game of Thrones", "George RR Martin", 600, 'unread');
let SampleBook1 = new Book("Feast of Crows", "George RR Martin", 600, 'unread');
let SampleBook2 = new Book("Storm of Swords", "George RR Martin", 600, 'unread');
let SampleBook3 = new Book("Clash of Kings", "George RR Martin", 600, 'unread');

let myLibrary = [SampleBook, SampleBook1, SampleBook3, SampleBook2];

function Book(title, author, page_count, read_status) { // Constructor
    this.title = title;
    this.author = author;
    this.page_count = page_count;
    this.read_status = read_status
}

Book.prototype.change_read_status = function() {
    if (this.read_status === 'read') {
        this.read_status = 'unread';
    } else {
        this.read_status = 'read';
    }
    return this.read_status;
}

function addBookToLibrary() {
    const title = document.getElementById('input-book-title').value;
    console.log(title);
    const author = document.getElementById('input-book-author').value;
    console.log(author);
    const page_count = document.getElementById('input-book-pages').value;
    console.log(page_count);
    const read_status = document.querySelector('input[name="read-status"]:checked').value;

    const new_book = new Book(title, author, page_count, read_status)
    myLibrary.push(new_book);
    displayLibrary();
    toggleModal();

    const form = document.getElementById('book-form').reset();
}


function displayLibrary () {
    library.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const new_book = buildCard(myLibrary[i], i)
        new_book.setAttribute('data-index', i)
        library.appendChild(new_book);
    }
}


function buildCard (book, index) {
    // Create library book card and add CSS class to it
    const card = document.createElement('div');
    card.classList.add("library-listing");

    // Create Title info
    const card_title = document.createElement('p');
    card_title.textContent = ("Title: " + book.title);
    card.appendChild(card_title);

        // Create Author info
    const card_author = document.createElement('p');
    card_author.textContent = ("Author: " + book.author);
    card.appendChild(card_author);

    // Create Page info
    const card_page_count = document.createElement('p');
    card_page_count.textContent = ("Page Count: " + book.page_count);
    card.appendChild(card_page_count);

    // Create Read Status info
    const card_read_status = document.createElement('p');
    card_read_status.textContent = ("Read Status: " + book.read_status);
    card.appendChild(card_read_status);

    // Create button container for 'read'/'unread' and 'Remove Book'
    const button_wrapper = document.createElement('div');
    button_wrapper.style.cssText = 'display: flex; flex-direction: row; justify-content: center; gap: 1rem;';
    card.appendChild(button_wrapper);
    const toggleRead = document.createElement('button');
    toggleRead.classList.add('modal-freeze');
    toggleRead.textContent = 'Change Read Status';
    toggleRead.addEventListener('click', () => {
        const BookObject = myLibrary[index];
        const StatusText = BookObject.change_read_status();
        card_read_status.textContent = ('Read Status: ' + StatusText);
    });
        
    const removeBook = document.createElement('button');
    removeBook.classList.add('modal-freeze');
    removeBook.textContent = 'Remove Book';
    removeBook.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        console.log(library);
        console.log(myLibrary);
        displayLibrary();
    });
    
    button_wrapper.appendChild(toggleRead);
    button_wrapper.appendChild(removeBook);

    return(card);
}


function toggleModal() {
    const modal = document.getElementById("add-book");
    if (addBookModal === false) {
        openBookModal.disabled = true;
        modal.style.display = 'block';
        addBookModal = true;
        freezePage();
    } else {
        modal.style.display = 'none';
        addBookModal = false;
        openBookModal.disabled = false;
        freezePage();
    }
}

function freezePage() { // Freezes all buttons on the page when modal is open.
    const buttonList = document.getElementsByClassName('modal-freeze');
    const buttonArray = Array.from(buttonList);
    if (addBookModal === true) {
        buttonArray.forEach(element => {
            element.classList.add('disabled');
        });
    } else {
        buttonArray.forEach(element => {
            element.classList.remove('disabled');
        });
    }
}  

displayLibrary();