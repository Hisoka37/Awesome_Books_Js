const form = document.querySelector('.form')
const title = document.querySelector('.booktitle')
const author = document.querySelector('.Authorname')
const book = document.querySelector ('.Addedbooks')

let books;
let showcase = '';
books.forEach((book, i) => {
    showcase += `
    <div>
    <h1>${book.title}</h1>
    <h2>${book.author}</h2>
    <button onclick="deleteBook(${i})">Remove</button>
    <hr>
    </div>`;
});
book.innerHTML = showcase ; 


