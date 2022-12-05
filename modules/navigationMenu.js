const bookList = document.querySelector('#nav-booklist a');
const addNewBook = document.querySelector('#nav-add a');
const contact = document.querySelector('#nav-contact a');
const bookListSection = document.getElementById('bookList');
const addNewBookSection = document.getElementById('addNewBook');
const contactSection = document.getElementById('contact');

const Navigation = () => {
  bookList.addEventListener('click', () => {
    bookList.classList.add('active');
    addNewBook.classList.remove('active');
    contact.classList.remove('active');
    bookListSection.classList.remove('hidden');
    addNewBookSection.classList.add('hidden');
    contactSection.classList.add('hidden');
  });

  addNewBook.addEventListener('click', () => {
    bookList.classList.remove('active');
    addNewBook.classList.add('active');
    contact.classList.remove('active');
    bookListSection.classList.add('hidden');
    addNewBookSection.classList.remove('hidden');
    contactSection.classList.add('hidden');
  });

  contact.addEventListener('click', () => {
    bookList.classList.remove('active');
    addNewBook.classList.remove('active');
    contact.classList.add('active');
    bookListSection.classList.add('hidden');
    addNewBookSection.classList.add('hidden');
    contactSection.classList.remove('hidden');
  });
};

export default Navigation;