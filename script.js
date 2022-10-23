const library = document.getElementById("library")

let myLibrary = [
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Dumb Book",
        author: "Dumb Man",
        page_count: "200",
        read_status: "Unread"
    },
    {
        title: "Siddhartha",
        author: "Herman Hesse",
        page_count: "200",
        read_status: "Unread"
    }
];

function Book(title, author, page_count, read_status) { // Constructor
    this.title = title;
    this.author = author;
    this.page_count = page_count;
    this.read_status = read_status
}

/* function addBookToLibrary(title, author, page_count, read_status) {
    const new_book = Book(title, author, page_count, read_status)
    if myLibrary.includes(new_book) {
        myLibrary.splice(new_book)
        myLibrary.append(new_book)
        return;
    }
    myLibrary.append(new_book);
} */

function displayLibrary () {
    myLibrary.forEach(element => {
        const new_book = buildCard(element);
        library.appendChild(new_book);
    });
}

function buildCard (book) {
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

    return(card);
}

displayLibrary();