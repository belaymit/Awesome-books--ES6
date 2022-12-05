import Add from './modules/addBooks.js';
import Date from './modules/dateTime.js';
import Navigator from './modules/navigationMenu.js';
import isEmpty from './modules/bookCollectionIsEmpty.js';
import bookList from './modules/displayBooks.js';
import copyrightDate from './modules/copyrightDate.js';
import menuNavigation from './modules/menuNavigation.js';

window.onload = bookList();
Add();
Navigator();
isEmpty();
setInterval(Date, 10);
copyrightDate();
menuNavigation();
