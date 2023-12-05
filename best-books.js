const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/';

const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById('books-container');
const booksResults = document.getElementById('books-results');
const placeholderText = document.getElementById('placeholder-text');
const NUMBER_OF_RESULTS = 5;

function getValueOrPlaceholder(element) {
  return element.value === '' ? element.placeholder : element.value;
}

const getBooks = (url) => {
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`An HTTP error occurred! Status: ${response.status}`)
      }
      return response.json();
    })
    .then(function (responseJson) {
        placeholderText.style.display = 'none';
        const books = responseJson.results.books;
    
        for (let i = 0; i < Math.min(NUMBER_OF_RESULTS, books.length); i++) {
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
          booksResults.appendChild(bookElement);
        }
    })    
    .catch(error => {
      placeholderText.innerHTML = 'We encountered an error. Please try a different date.';
      placeholderText.style.display = 'block';
      booksResults.innerHTML = '';
      console.error('Error:', error);
    });
}

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const url = `${BASE_URL}${getValueOrPlaceholder(yearEl)}-${getValueOrPlaceholder(monthEl)}-${getValueOrPlaceholder(dateEl)}/hardcover-fiction.json?api-key=${API_KEY}`;
  getBooks(url);

});
