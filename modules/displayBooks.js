import { Book, booksCollection } from './Books.js';

const allBooks = document.querySelector('.all-books-container');

const booksMagazine = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const displayAllBooks = () => {
  booksMagazine(booksCollection);
  allBooks.innerHTML = booksCollection
    .map((item) => `<div class="book-item-container">
      <p><span class="book-title">${item.title}</span> by ${item.author}</p>
      <button class="deleteBtn">Remove</button>
    </div>`)
    .join('');

  const removeBtn = document.querySelectorAll('.deleteBtn');
  removeBtn.forEach((button, index) => button.addEventListener('click', () => {
    Book.removeBooks(index);
    displayAllBooks();
  }));
};

export default displayAllBooks;
