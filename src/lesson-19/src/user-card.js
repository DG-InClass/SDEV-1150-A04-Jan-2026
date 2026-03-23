// All HTML Elements (<p>, <h1>, <img>, etc.) are based on specific
// classes which all derive from (or are "based upon") the general-
// purpose HTMLElement class.
// In general, in JavaScript, a "class" is like a programmatic representation of an object.

// In our case, we will use this JavaScript class syntax to create
// our own custom HTML elements (web components).
class UserCard extends HTMLElement {
    constructor() {
        super(); // Call to the constructor of the HTMLElement
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.getElementById('user-card-template');
        const content = template.content.cloneNode(true);

        shadow.appendChild(content);
    }
}

// We need to let the browser know about our new "tag":
customElements.define('user-card', UserCard);

export default UserCard;
