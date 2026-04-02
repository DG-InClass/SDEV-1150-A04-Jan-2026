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
      <button>Follow</button>
    </div>
  </div>
`;
document.body.appendChild(template);

class UserCard extends HTMLElement {
  // Private Field/Property of the UserCard
  #followed; // = false; // initial value
  #btn; // If you create an uninitialized field/property,
        // then you should make sure to give it a value
        // inside the constructor() function.
  #user = null; // This will be more "complete" info on the user

  // With the #user being private, I can create a setter/getter to
  // change/access the underlying data
  get user() { return this.#user; }
  set user(userInfo) {
    // TODO: Perform some data validation on the userInfo
    this.#user = userInfo; // if it passes validation, store it
    // Render the UI (assume user details have changed)
    this.#renderFromUser();
  }

  #renderFromUser() {
    if(this.#user) {
      if(this.#user.avatar) {
        this.#img.src = this.#user.avatar;
      } else {
        this.#img.src = 'https://placehold.co/80x80/0077ff/ffffff';
      }
      // NOTE: Compare the approach above with the one below.
      //       Which one makes better sense to you? Which do you prefer?
      this.setAttribute('user-id', this.#user.id || '');

      // Update internal slots via shado DOM query selectors for the text nodes.
      const nameSlot = this.shadowRoot.querySelector('[name="name"]');
      if(nameSlot) {
        nameSlot.textContent = this.#user.name || '';
      }
      const descSlot = this.shadowRoot.querySelector('[name="description"]');
      if(descSlot) {
        descSlot.textContent = this.#user.description || '';
      }
    }
  }

  #img;

  constructor() {
    super();

    // Added property to track follow state
    this.#followed = false;

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    this.#img = content.querySelector('img');
    // #img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80/0077ff/ffffff';
    this.#btn = content.querySelector('button');
    this.#btn.addEventListener('click', () => this.#onFollow());
    shadow.appendChild(content);
  }

  follow() {
    this.#setFollow(true);
  }

  unfollow() {
    this.#setFollow(false);
  }

  // Property to read followed state
  // On the inside of the UserCard, this looks (and acts) as a function
  // BUT, because it has the get keyword, it will be used from the "outside"
  // as though it is just a property.
  get followed() {
    return this.#followed;
  }

  #setFollow(value) {
    this.#followed = value;
    this.#btn.textContent = this.#followed ? 'Following' : 'Follow';
    this.dispatchEvent(new CustomEvent('follow-change', {
      detail: { id: this.getAttribute('user-id') || null, followed: this.#followed },
      bubbles: true,
      composed: true,
    }));
  }

  // Follow button handler
  #onFollow() {
    this.#setFollow(!this.#followed);
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

  // Lifecyle: called by the browser when the element is added to the DOM
  connectedCallback() {
    // Attach local listener(s)
    this.#btn.addEventListener('click', this.#onButtonClick);

    // If user property was set before connect, render it now
    if (this.#user) {
      this.#renderFromUser();
    } else {
      // Fallback to attribute if user property not proviced
      const avatar = this.getAttribute('avatar');
      this.#img.src = avatar || 'https://placehold.co/80x80/0077ff/ffffff';
    }
  }

  // Lifecycle: called by the browser when the element is removed from the DOM
  disconnectedCallback() {
    this.#btn.removeEventListener('click', this.#onButtonClick);
  }

  #onButtonClick() {
    this.#setFollow(!this.#followed); // Toggle the follow state
  }
}

customElements.define('user-card', UserCard);

export default UserCard;
