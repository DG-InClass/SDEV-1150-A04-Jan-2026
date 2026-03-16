// Import the functions necessary to make the API calls
import { fetchJsonData, postData } from './utils';

// Select the necessary DOM elements
const loadButton = document.getElementById('loadBooks');
const list = document.getElementById('bookList');
const addForm = document.getElementById('addBook');

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
        })
        .catch(err => {
            // Let's handle the error...
            list.innerHTML = `<li style="color:red;">Error: ${err.message}</li>`;
        });
}


// Define a function to handle form submission for adding a new book
async function submitHandler(evt) {
    evt.preventDefault(); // stops the form from submitting
    const form = evt.target;
    // Use the FormData API to collect user input from the form
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data['year'] = Number(data.year); // convert year as a string into the year as a number

    try {
        await postData(endpoint, data);
        // Call loadHandler to "refresh" the list
        loadHandler();
    } catch (error) {
        // TODO: Display the error in a nicer way to the user
        console.error('Error submiting form:', error);
    }
}

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);

// TODO: Add delete functionality
