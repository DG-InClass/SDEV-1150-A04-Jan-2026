// Import the functions necessary to make the API calls
import { fetchJsonData } from './utils';

// Select the necessary DOM elements
const loadButton = document.getElementById('loadBooks');
const list = document.getElementById('bookList');

// Define the API endpoint
const endpoint = 'http://localhost:3000/books'; // Note: This might be something you put outside of the main.js, depending on how you design your app.

// Define a function to handle loading and displaying the list of books
const loadHandler = function() {
    // Note: A Promise<T> has two associated functions:
    //   .then(), which also returns a Promise<T> - when the promise succeeds
    //   .catch(), which returns a Promise<T> - when the promise fails (is rejected)
    fetchJsonData(endpoint)
        .then(data => {
            // 😁 Looks like we got data!
            console.log(data);
            list.innerHTML = ''; // clear the existing content
            data.forEach(book => {
                // I'll use the DOM API for creating elements
                const li = document.createElement('li');
                li.textContent = `${book.title} by ${book.author}`;
                list.appendChild(li);
            });
        });
}


// Define a function to handle form submission for adding a new book

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);

// TODO: Add delete functionality
