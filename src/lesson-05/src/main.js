console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const titleEl = document.querySelector('#page-title'); // <tag id="page-title">
const taglineEl = document.querySelector('.tagline'); // <tag class="tagline">
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

console.log('Selected elements:', { titleEl, taglineEl, heroImg, dynamicBox, footerNote });

// 2. textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window in Page Structure';
dynamicBox.innerHTML = `
    <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
    </p>
`;
heroCaption.textContent = 'This caption was updated using <code>textContent</code>';

// 3. Attributes & Styling
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd';
// Intellisense (the pop-up as you type in VS Code)
// will have a very limited understanding of what the
// JavaScript objects actually are.

// 4. Create small helper functions for reuse
//    A function is kind of like a "mini-program" in that
//    it is a set of instructions (code) that you can
//    execute (or "run") in your code.
//    There are two aspects/parts to functions.
//    A) The function must be Declared (this is done once).
//       Declaring a function is making the function exist
//       and is where you put all the instructions/tasks
//       you want the function to perform.
//    B) Once the function is declared, you can "call" or
//       "invoke" the function. This just means you tell
//       the function to perform its task.

// The grammar used for this function below is called
// Function Declaration syntax.
function updateText(selector, text) {
    const el = document.querySelector(selector);
    if(!el) {
        return console.warn('No element found for', selector);
    }
    el.textContent = text;
}

function updateHTML(selector, html) {
    const el = document.querySelector(selector);
    // Checking to see if the selector was found
    // is good to do.
    if(el !== null) {
        el.innerHTML = html;
    } else {
        console.warn('No element found for', selector);
    }
}

// 5. Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `I can <u>programmatically</u> change <strong>HTML</strong> using <i>JavaScript</i>.`);

// 6. Footer text tweak (demonstrate class toggle & style change)
// Add the    class="footer-strong"   attribute to the 
// footerNote
footerNote.classList.add('footer-strong');

footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';
// Require innerHTML here to render the &copy; entity correctly