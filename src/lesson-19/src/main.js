// // Ad-hoc code
// const template = document.getElementById('user-card-template');

// const content = template.content.cloneNode(true); // "copy" of the contents
// // debugger;
// document.body.appendChild(content); // Voila! We've got the content dynamically added.
// // ... end of Ad-hoc

// Import the user-card component to register the custom element
import './user-card'; // Notice in our import, we aren't grabbing the exported type, but the code that declares our <user-card> will still run.

// Create an additional user card using HTML and append it to the main element
const htmlUserCard = `
    <user-card avatar="assets/Impa.png">
        <span slot="characterName">Impa</span>
        <span slot="about">Village elder of the Ninja Tribe</span>
    </user-card>
`;

const main = document.querySelector('main');
// main.innerHTML += htmlUserCard
main.insertAdjacentHTML('beforeend', htmlUserCard);

// Create another user card using JavaScript DOM API only and append it to the main element
const preciseUserCard = document.createElement('user-card');
preciseUserCard.setAttribute('avatar', 'assets/Malon.png');
const nameSpan = document.createElement('span');
nameSpan.setAttribute('slot', 'characterName');
nameSpan.textContent = 'Malon';
const descSpan = document.createElement('span');
descSpan.setAttribute('slot', 'about');
descSpan.textContent = 'A farm girl who works and lives in Lon Lon Ranch';
preciseUserCard.appendChild(nameSpan);
preciseUserCard.appendChild(descSpan);
main.appendChild(preciseUserCard);
