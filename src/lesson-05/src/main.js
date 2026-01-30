console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
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
heroCaption.textContent = 'This caption was updated using textContent';

// 3. Attributes & styles

// 4. Create small helper functions for reuse

// 5. Use helpers to perform simple tasks

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly