class Library {
  constructor() {
    // Create an empty Array containg all Book Elements
    this.books = [];
  }
  // Add a Function that adds our Books and appends them into our Array of Books
  addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }
  getAllBooks() {
    return this.books;
  }

  readBook() {
    return this.read;
  }

}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getPages() {
    return this.pages;
  }

  getRead() {
    if(this.read == true) {
        return "Book has been read!"
    } else if (this.read == false) {
        return "Has not been read yet!"
    }
  }
}

const library = new Library();

function printBooks() {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = "";

  const books = library.getAllBooks();
  books.forEach((book, index) => {
    const bookInfo = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");

    bookTitle.textContent = `Title: ${book.getTitle()}`;
    bookAuthor.textContent = `Author: ${book.getAuthor()}`;
    bookPages.textContent = `Pages: ${book.getPages()}`;
    bookRead.textContent = `${book.getRead()}`;
   
    const readButton = document.createElement("button");
    readButton.textContent = "Read?";
    readButton.classList.add("submitbutton");
    readButton.addEventListener("click", () => {
        book.read = !book.read;
        printBooks();
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      library.removeBook(index);
      printBooks();
    });

    if(book.read == false) {
        bookRead.style.color = "red";
    } else {
        bookRead.style.color = "green";
    }

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);
    bookInfo.appendChild(bookRead)

    bookInfo.appendChild(readButton);
    bookInfo.appendChild(removeButton);
    bookContainer.appendChild(bookInfo);
  });
}

function createInputFields() {
  const mainContainer = document.getElementById("container");
  const inputContainer = document.createElement("div");

  const inputName = createInput("text", "Title");
  const inputAuthor = createInput("text", "Author");
  const inputPages = createInput("number", "Pages");
  const checkButton = createInput("checkbox");
  // const readButton = document.createElement("button");
  const submitBook = document.createElement("button");
  

  // readButton.textContent = "Read (y/n)";
  submitBook.textContent = "Submit!";

  submitBook.addEventListener("click", () => {
    const title = inputName.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const read = checkButton.checked;

    if(title && author && pages && typeof read == "boolean") {
        library.addBook(title, author, parseInt(pages), read);
        inputName.value = "";
        inputAuthor.value = "";
        inputPages.value = "";
        checkButton.checked = false;
        printBooks();
    } else {
        alert("Please fill out the Book Informations")
    }

  });

  inputContainer.appendChild(inputName);
  inputContainer.appendChild(inputAuthor);
  inputContainer.appendChild(inputPages);
  inputContainer.appendChild(checkButton);
  // inputContainer.appendChild(readButton);
  inputContainer.appendChild(submitBook);

  mainContainer.appendChild(inputContainer);
}

function createInput(type, placeholder) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.placeholder = placeholder;
  return input;
}

createInputFields();
printBooks();
