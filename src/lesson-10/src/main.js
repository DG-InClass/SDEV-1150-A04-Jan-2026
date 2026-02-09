console.log('Lesson 10 starter loaded');

// 1. Select required elements
const theForm = document.querySelector('#contact-form'); // <form id="contact-form">
const result = document.querySelector('#result'); // <div id="result" 
result.innerText = "I will echo form input here...";

// 2. Function to gather and structure form data
/**
 * This function will handle the form's processing client-side.
 * @param {SubmitEvent} evt The event that is associated with submitting the form
 */
function serializeForm(evt) {
    // Here is where I will process the form input.
    console.log('Running the form serialization....');
    console.log(evt); // What's this evt parameter???
    evt.preventDefault(); // 📌 Remember to do this!!!
    const theTarget = evt.target;
    console.log('The target of the event is:', theTarget);
}

// Access values using both form.elements and query selectors

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()
theForm.addEventListener('submit', serializeForm);
//                       \______/  \___________/
//               name of event |     | the function that will be run

// 4. Handle form reset - reset the result area text when the form is reset
