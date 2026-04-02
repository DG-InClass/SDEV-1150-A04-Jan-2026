// Import the user-card component to register the custom element
import './user-card.js';

let main = document.querySelector('main');
let myCard = document.createElement('user-card');
main.appendChild(myCard);
// console.log(myCard.#followed); // Private members can't be accessed
// console.log(myCard._onFollow);

//An array of user objects
const users = [
  { id: 'u1', name: 'Zelda', avatar: 'assets/zelda-avatar.png', description: 'Princess of Hyrule' },
  { id: 'u2', name: 'Link', avatar: 'assets/link-avatar.png', description: 'Hero of Hyrule'},
  { id: 'u3', name: 'Mipha', description: 'Zora Champion' }
];

users.forEach(user => {
  const card = document.createElement('user-card');
  card.user = user;
  main.appendChild(card);
});


// Theme toggle button logic
let dark = false;
const toggleBtn = document.querySelector('#btn-theme');
toggleBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.style.setProperty('--global-card-bg', dark ? '#1f2937' : '#ffffff');
  document.documentElement.style.setProperty('--global-card-color', dark ? '#e5e7eb' : '#222222');
  document.documentElement.style.setProperty('--global-card-accent', dark ? 'gold' : '#0077ff');
  toggleBtn.textContent = dark ? '☀️' : '🌙';
});
