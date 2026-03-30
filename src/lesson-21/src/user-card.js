// Self-contained user card web component with Shadow DOM
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      --card-bg: var(--global-card-bg, #ffffff);
      --card-color: var(--global-card-color, #222222);
      --card-accent: var(--global-card-accent, #0077ff);
      display: block;
    }
    .card {
      background: var(--card-bg);
      color: var(--card-color);
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
      color: var(--card-accent);
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      margin: 0;
    }
    .description {
      font-size: 0.9rem;
      color: #666;
      display: block;
      margin-top: 4px;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      flex: 0 0 80px;
    }
  </style>
  
  <div class="card">
    <img src="" width="80" height="80" alt="avatar">
    <div class="info">
      <slot name="name" class="name"></slot>
      <slot name="description" class="description"></slot>
    </div>
    <button>Follow</button>
  </div>
`;
document.body.appendChild(template);

class UserCard extends HTMLElement {
  constructor() {
    super();

    // Add a property to track the followed state
    this._followed = false; // Putting an underscore before is a cue
                            // to other developers that they should
                            // NOT be directly accessing this property.
    

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    const img = content.querySelector('img');
    img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80/0077ff/ffffff';

    this._btn = content.querySelector('button');
    this._btn.addEventListener('click', () => {
      this._setFollow(!this._followed); // Toggle the state
      console.log('Follow button clicked'); // helpful for debugging
    });

    shadow.appendChild(content);
  } // end of the constructor()

  _setFollow(value) {
    this._followed = value;
    this._btn.textContent = this._followed ? 'Following' : 'Follow';
    // emit (dispatch) a custom event so that the parent container
    // can react to what happened internally with my component.
    this.dispatchEvent(new CustomEvent('follow-change', {
      detail: {
        id: this.getAttribute('user-id') || null,
        followed: this._followed
      },
      bubbles: true, // the event can "bubble up" through the DOM
      composed: true
    }));
  }

  // Two functions so that other code (like main.js) can programmatically change the followed state
  follow() {
    this._setFollow(true);
  }

  unfollow() {
    this._setFollow(false);
  }

  // Respond to attribute changes if needed in the future
  static get observedAttributes() {
    return ['avatar'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'avatar' && this.shadowRoot) {
      const img = this.shadowRoot.querySelector('img');
      if (img) {
        img.src = newValue;
      }
    }
  }
}

customElements.define('user-card', UserCard);

export default UserCard;
