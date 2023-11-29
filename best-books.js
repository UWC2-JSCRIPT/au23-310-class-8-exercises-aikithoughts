const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/';

const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById('books-container');
const placeholderText = document.getElementById('placeholder-text');
const NUMBER_OF_RESULTS = 5;

function getValueOrPlaceholder(element) {
  return element.value === '' ? element.placeholder : element.value;
}

const getBooks = (url) => {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {

      placeholderText.style.display = 'none';

      books = responseJson.results.books;

      for (i = 0; i < NUMBER_OF_RESULTS; i++) {
        const bookElement = document.createElement("div");
        bookElement.innerHTML = `
          <table>
          <tr>
          <td>
          <img src='${books[i].book_image}' alt='book cover of ${books[i].title}'/>
          </td>
          <td>
          <h2>${books[i].title}</h2>
          <p><b>Author: </b>${books[i].author}</p>
          <p>${books[i].description}</p>
          </td>
          </tr>
          </table>
          `;
        booksContainer.appendChild(bookElement);

      }
    })
    .catch(error =>  placeholderText.innerHTML = `We encountered this error: ${error}. Maybe try the library?`
    );
}
// console.log(url);

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const url = `${BASE_URL}${getValueOrPlaceholder(yearEl)}-${getValueOrPlaceholder(monthEl)}-${getValueOrPlaceholder(dateEl)}/hardcover-fiction.json?api-key=${API_KEY}`;

  getBooks(url);

  // Fetch bestselling books for date and add top 5 to page
});
