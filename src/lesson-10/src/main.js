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
    // The default behaviour is to send the form's data to the
    // web server for processing/storage/whatever.
    // But, because we don't have a web server, we're going to
    // "process" (or "intercept") the users's input.

    const theTarget = evt.target; // The target of all form submit
                                  // events is the <form> element.
    console.log('The target of the event is:', theTarget);
    
    // From the form element, we can access all of the input controls
    // to get the user's information.
    const allInputs = theTarget.elements;
    console.log('The .elements is:', allInputs);

    // We'll extract the user-supplied information from these controls
    // Notice who each input control has a .value property
    let personName = allInputs.fullName.value; // <input name="fullName" />
    let email = allInputs.email.value; // <input name="email" />
    let biography = allInputs.bio.value; // <textarea name="bio">

    console.clear(); // remove the clutter...
    // Radio buttons with the same name, but different values
    const plan = allInputs.plan.value;
    console.log('The user has this front-end skill level', plan);
    // Radio buttons are "mutually-exclusive" user inputs

    // Checkboxes allow for multiple values to be "gathered"
    const topics = allInputs.topics.value;
    console.log('The value of the checkboxes is:', topics);

    // This is the checkboxes
    // console.log('The checkboxes:', allInputs.topics);
    let topicArray = []; // Initialize/declare an empty array.
    for(let aBox of allInputs.topics) {
        // As I loop through all the <input type="checkbox" name="topics",
        // aBox will be one of the actual input controls.
        console.log(aBox.value, aBox.checked);
        // All type="checkbox" and type="radio" inputs have a
        // .checked property which is a boolean (true|false)
        if(aBox.checked) {
            // Add that topic's value to our array
            topicArray.push(aBox.value);
        }
    }
    console.log('\nSelected Topics:\n', topicArray);


    // "Echo" the data back to the user
    let message = `Data Received:
    - Name: ${personName}
    - Email: ${email}
    - Skill Level: ${plan}
    - Skills: ${topicArray}
    - Biography: ${biography}`;
    result.textContent = message;

    // Typically, once we've gathered and processed the user's
    // form input, it's a good idea to "clear" the form for 
    // further input.
    allInputs.fullName.value = '';
    allInputs.email.value = '';
    allInputs.bio.value = '';
    // To clear selections from radio buttons and checkboxes,
    // we set the .checked to false.
    for(let checkbox of allInputs.topics)
        checkbox.checked = false;
    for(let radio of  allInputs.plan)
        radio.checked = false;
    // In these cases when you clear the form and are expecting
    // the user to re-fill the form with more data, you can
    // programattically set the focus to a particular input control
    allInputs.fullName.focus(); // This will receive keyboard focus
}

// Access values using both form.elements and query selectors

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()
theForm.addEventListener('submit', serializeForm);
//                       \______/  \___________/
//               name of event |     | the function that will be run

// 4. Handle form reset - reset the result area text when the form is reset
theForm.addEventListener('reset', function(ev) {
    // ev.preventDefault();
    // If I un-comment the line above, I will prevent/stop
    // the default browser behaviour for forms (which is to
    // reset all the contents of the input controls to the values
    // they had when the page was loaded)
    result.textContent = 'Form cleared by the user. Awaiting submissions...';
});

