const myLibrary = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function createInputFields() {
    const mainContainer = document.getElementById("container");
    const inputContainer = document.createElement("div");

    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.placeholder = "Title";

    const inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("type", "text");
    inputAuthor.placeholder = "Author";

    const inputPages = document.createElement("input");
    inputPages.setAttribute("type", "number");
    inputPages.placeholder = "Pages";

    inputContainer.appendChild(inputName);
    inputContainer.appendChild(inputAuthor);
    inputContainer.appendChild(inputPages);


    const bookPusher = document.createElement("button");
    bookPusher.textContent = "Submit";

    inputContainer.appendChild(bookPusher);

    mainContainer.appendChild(inputContainer);
// Add Eventlitener to Book so that I can submit the Books to my Array :)
    bookPusher.addEventListener("click", function() {
        const title = inputName.value;
        const author = inputAuthor.value;
        const pages = inputPages.value;

        if(title && author && pages) {
            addBookToLibrary(title,author,parseInt(pages));
            inputName.value = "";
            inputAuthor.value = "";
            inputPages.value = "";

        } else {
            console.log("not all fields are filled!")
        }
    })

}

function addBookToLibrary(title, author, pages) {

    const book = new Book(title, author, pages);
    myLibrary.push(book);
    console.log("Book added", book);
}

createInputFields();