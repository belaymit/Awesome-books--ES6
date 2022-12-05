const StoredData = JSON.parse(localStorage.getItem('books'));

const isEmpty = () => {
  if (StoredData.length === 0) {
    document.querySelector('.all-books-container').innerHTML = '<p class="isEmpty">No book available in Books Collection!</p>';
    document.querySelector('.isEmpty').style.padding = '1rem';
  }
};

export default isEmpty;