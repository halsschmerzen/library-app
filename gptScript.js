class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  getAllBooks() {
    return this.books;
  }
}

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  info() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
  }
}

const library = new Library();

function printBooks() {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = "";

  const books = library.getAllBooks();
  books.forEach((book, index) => {
    const bookInfo = document.createElement("div");
    bookInfo.textContent = `Book ${index + 1}: ${book.info()}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      library.removeBook(index);
      printBooks();
    });

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

  const bookPusher = document.createElement("button");
  bookPusher.textContent = "Submit";
  bookPusher.addEventListener("click", () => {
    const title = inputName.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;

    if (title && author && pages) {
      library.addBook(title, author, parseInt(pages));
      inputName.value = "";
      inputAuthor.value = "";
      inputPages.value = "";
      printBooks();
    } else {
      console.log("Not all fields are filled!");
    }
  });

  inputContainer.appendChild(inputName);
  inputContainer.appendChild(inputAuthor);
  inputContainer.appendChild(inputPages);
  inputContainer.appendChild(bookPusher);

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

