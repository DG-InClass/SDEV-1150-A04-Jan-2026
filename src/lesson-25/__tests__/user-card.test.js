// user-card.test.js
import { expect, test, describe, beforeEach, afterEach } from 'vitest';

import '../src/user-card.js'; // Import the web component definition
let element;

beforeEach(() => {
  // Set up a new instance of the component before each test
  element = document.createElement('user-card');
});

afterEach(() => {
  // Clean up after each test
  element.remove();
  element = null;
});

describe('UserCard', () => {
  test('renders with default properties', () => {
    // Act
    document.body.appendChild(element);

    // Assert
    expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
    expect(element.followed).toBe(false);
  });

  test('renders name and description', async () => {
    // Arrange
    const element = document.createElement('user-card');
    const nameSpan = document.createElement('span');
    nameSpan.setAttribute('slot', 'name');
    nameSpan.textContent = 'Vitest User';

    const descSpan = document.createElement('span');
    descSpan.setAttribute('slot', 'description');
    descSpan.textContent = 'A user for testing with Vitest';

    element.appendChild(nameSpan);
    element.appendChild(descSpan);

    // Act
    document.body.appendChild(element);

    // Assert the result
    const nameSlot = element.shadowRoot.querySelector('slot[name="name"]');
    const descSlot = element.shadowRoot.querySelector('slot[name="description"]');
    expect(nameSlot.assignedNodes()[0].textContent).toBe('Vitest User');
    expect(descSlot.assignedNodes()[0].textContent).toBe('A user for testing with Vitest');
  });

  test('render description when setting the user property', () => {
    // Arrange
    const user = {
      id: 'user123',
      name: 'Test User',
      description: 'This is a test user',
      avatar: 'https://example.com/user-avatar.png'
    }

    // Act
    element.user = user;
    document.body.appendChild(element);

    // Assert
    const descSlot = element.shadowRoot.querySelector('[name="description"]');
    expect(descSlot).toBeDefined();
    expect(descSlot.textContent).toBe(user.description);
  });

  test('render user name when setting the user property', () => {
    // Arrange
    const user = {
      id: 'user123',
      name: 'Test User',
      description: 'This is a test user',
      avatar: 'https://example.com/user-avatar.png'
    }

    // Act
    element.user = user;
    document.body.appendChild(element);

    // Assert
    const userSlot = element.shadowRoot.querySelector('[name="name"]');
    expect(userSlot).toBeDefined();
    expect(userSlot.textContent).toBe(user.name);
  });

  test('updates the avatar image', () => {
    // Arrange
    const testAvatarUrl = 'http://example.com/avatar.png';

    // Act
    document.body.appendChild(element);
    element.setAttribute('avatar', testAvatarUrl);

    // Assert
    expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe(testAvatarUrl);
  });
});
