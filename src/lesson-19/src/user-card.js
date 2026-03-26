// All HTML Elements (<p>, <h1>, <img>, etc.) are based on specific
// classes which all derive from (or are "based upon") the general-
// purpose HTMLElement class.
// In general, in JavaScript, a "class" is like a programmatic representation of an object.
const template = document.createElement('template');
template.innerHTML = `
      <style>
        /* User Card Styles */
        .card {
          background: #ffffff;
          color: #222222;
          border: 1px solid #e6e6e6;
          padding: 12px;
          border-radius: 8px;
          display: flex;
          gap: 12px;
          align-items: center;
          width: 320px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        .name {
          font-size: 1.2em;
          font-weight: bold;
          margin: 0;
        }
      </style>
      <div class="card">
        <img src="" width="80" height="80" alt="avatar" />
        <div class="info">
          <slot name="characterName" class="name"></slot>
          <slot name="about" class="description"></slot>
        </div>
      </div>
`;

// In our case, we will use this JavaScript class syntax to create
// our own custom HTML elements (web components).
class UserCard extends HTMLElement {
    constructor() {
        super(); // Call to the constructor of the HTMLElement
        const shadow = this.attachShadow({ mode: 'open' });
        //const template = document.getElementById('user-card-template');
        const content = template.content.cloneNode(true);

        // Look for an `avatar=""` attribute on our <user-card>
        const img = content.querySelector('img');
        const srcUrl = this.getAttribute('avatar');
        if(srcUrl) {
            img.src = srcUrl;
        } else {
            // "fallback" image if no avatar is provided.
            img.src = 'https://placehold.co/80x80';
        }

        shadow.appendChild(content);
    }

    // Respond to attribute changes
    static get observedAttributes() {
        return ['avatar'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'avatar' && this.shadowRoot) {
            const img = this.shadowRoot.querySelector('img');
            if(img) {
                img.src = newValue;
            }
        }
    }
}

// We need to let the browser know about our new "tag":
customElements.define('user-card', UserCard);

export default UserCard;
