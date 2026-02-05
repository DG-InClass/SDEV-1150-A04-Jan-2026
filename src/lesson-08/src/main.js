console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
// The idea of listening for the 'DOMContentLoaded' event is a really, really old idea. You should NOT be doing that in your code. 🤮
// Because we are using <script type="module" src="..."></script>, we don't need to listen for that content loaded event

// 2. Selecting elements
const btnToggle = document.querySelector('#btn-toggle');


// 3. click: toggle a highlight class on the body
btnToggle.addEventListener('click', function () {
    document.body.classList.toggle('highlight');
    // the .classList property/object of any HTML Element
    // has three useful functions/methods
    //  .add(className)     - Put the className onto the element as a class attribute
    //  .remove(className)  - Remove that className from the class attribute
    //  .toggle(className)  - Add/Remove depending on whether or not it is present
    
    const on = document.body.classList.contains('highlight');
    // The .contains() function on the classList object will return
    // a true if the CSS classname ('highlight') exists on the <body>
    // or it will return false if the CSS classname does not exist on the <body>

    btnToggle.textContent = on ? 'Highlight is ON' : 'Highlight is OFF';
    // The line of code above uses a Ternary Expression to get some text
    // that can be stored in the button.
});


// 4. click: change message textContent (no HTML parsing)
const btnMessage = document.querySelector('#btn-message');
const message = document.getElementById('message');
// const message = document.querySelector('#message');

btnMessage.addEventListener('click', function() {
    const timeString = new Date().toLocaleTimeString();
    message.textContent = `Message updated at ${timeString}`;
});

// 5. mouseover / mouseout: display hover status on the card
const hoverCard = document.getElementById('hover-card');
const hoverStatus = document.getElementById('hover-status');

hoverCard.addEventListener('mouseover', function() {
    hoverStatus.textContent = 'Status: Hovering';
});

hoverCard.addEventListener('mouseout', function() {
    hoverStatus.textContent = 'Status: Not hovering';
});

// 6. keydown: show last key pressed (global listener)
const keyOutput = document.getElementById('key-output');

document.addEventListener('keydown', function(evt) {
    keyOutput.textContent = `Last key: ${evt.key} (code: ${evt.code})`;
});

// 7. Event delegation: one listener on the <ul> for all <li> elements
const list = document.querySelector('#list');
const selection = document.querySelector('#selection');

list.addEventListener('click', function(ev) {
    // Making sure that the thing clicked on was an <li> element
    if (ev.target.tagName === 'LI') {
        // Remove previous selection by looking for some <li class="active">
        const prev = list.querySelector('li.active');
        // Note that our .querySelector() function is a function available
        // on any HTMLElement in our document
        if (prev) {
            prev.classList.remove('active');
        }

        // Activate clicked list item
        const li = ev.target; // should be the <li> element
        li.classList.add('active');

        // <li data-id="2">
        const id = li.getAttribute('data-id');
        selection.textContent = `Selected: Item ${id}`;
    }
});
