import displayAllBooks from './displayBooks.js';
import { Book, booksCollection } from './Books.js';

const Info = document.querySelector('.info');

const submitBtn = document.querySelector('#submitBtn');
const bookTitle = document.querySelector('#bookTitle');
const authorName = document.querySelector('#authorName');

const AddBook = () => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (bookTitle.value === '' && authorName.value === '') {
      Info.style.display = 'block';
      Info.style.color = 'red';
      Info.textContent = 'Please fill in all fields';
      return false;
    }
    const book = new Book(bookTitle.value, authorName.value);
    booksCollection.push(book);
    Info.style.display = 'block';
    Info.style.color = 'green';
    Info.textContent = 'Book added successfully';
    displayAllBooks();
    bookTitle.value = '';
    authorName.value = '';
    return true;
  });
};

const displayNone = () => {
  Info.style.display = 'none';
};

window.addEventListener('load', () => {
  setInterval(displayNone, 5000);
});

export default AddBook;
