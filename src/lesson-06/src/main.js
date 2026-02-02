console.log('Lesson 06 starter loaded');

// Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

// 1. Create a new variable for the feature list element
const featureList = document.querySelector('#feature-list');

// 2. Add feature list to the displayed elements below
console.log('Selected elements:', {
  titleEl, taglineEl, heroImg, heroCaption, dynamicBox, footerNote, featureList
});

// 3. Modify list content
//  a) Create an `<li>` element
//     <li class='feature'>Flexible</li>
const li = document.createElement('li');
li.className = 'feature'; // li.classList.add('feature');
li.textContent = 'Flexible'; // li.innerText = 'Flexible';

// 4. Add a new item dynamically
featureList.appendChild(li); // You should see it added

// 5. Retreive all list items (querySelectorAll) and update their text
const allFeatures = document.querySelectorAll('.feature');
allFeatures.forEach((li, idx) => {
  li.textContent = `${idx + 1}. ${li.textContent}`;
});

// 6. Removing the first item from the list using DOM relationships to find it
featureList.removeChild(featureList.firstElementChild);

// 7. Update the second item using nextElementSibling
featureList.firstChild.nextElementSibling.textContent += ' (updated)';

// 8. Move the last item to the front of the list
const last = featureList.removeChild(featureList.lastChild);
featureList.insertBefore(last, featureList.firstChild);

// 9. Use a timer to add a new item after 3 seconds have passed
setTimeout(() => {
  const newLi = document.createElement('li');
  newLi.className = 'feature';
  newLi.textContent = 'I am new! (added after 3 seconds)';
  featureList.appendChild(newLi);
}, 3000);

// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

heroCaption.textContent = 'This caption was updated using textContent.';

// Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd';

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.innerHTML = html;
}

// Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

// Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';
