// // Ad-hoc code
// const template = document.getElementById('user-card-template');

// const content = template.content.cloneNode(true); // "copy" of the contents
// // debugger;
// document.body.appendChild(content); // Voila! We've got the content dynamically added.
// // ... end of Ad-hoc

// Import the user-card component to register the custom element
import './user-card'; // Notice in our import, we aren't grabbing the exported type, but the code that declares our <user-card> will still run.

// Create an additional user card using HTML and append it to the main element

// Create another user card using JavaScript DOM API only and append it to the main element
