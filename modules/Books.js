const booksCollection = JSON.parse(localStorage.getItem('books')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    booksCollection.push(this);
  };

  static removeBooks = (index) => {
    booksCollection.splice(index, 1);
  };
}

export { Book, booksCollection };
