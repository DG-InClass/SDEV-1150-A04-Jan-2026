// @vitest-environment jsdom
// ~/tests/user-card.spec.js
// In the terminal, run:  pnpm test
//                   or:  pnpm test:watch
import { expect, it, test, describe } from 'vitest';
import '../src/user-card'; // import the web component definition

describe('UserCard component', () => {
    /* My typical workflow when designing/developing some component is to
       list out all my test/spec names
       - 
       - 
       - 

    */
    it('should not be following the character by default', () => {
        // Arrange
        const element = document.createElement('user-card');
        document.body.appendChild(element);

        // Act
        let actual = element.followed;

        // Assert
        expect(actual).toBe(false);
    });

    it('render name correctly', () => {
        // Arrange
        // 1) Create the custom element
        const element = document.createElement('user-card');
        // 2) <span slot="name">Vitest user</span>
        const nameSpan = document.createElement('span');
        nameSpan.setAttribute('slot', 'name');
        nameSpan.textContent = 'Vitest user';
        // 3) Put the slotted content into the custom element 😢
        element.appendChild(nameSpan);
        // 4) Put the custom element into the (fake) DOM
        document.body.appendChild(element);

        // Act
        const actual = element.shadowRoot.querySelector('slot[name="name"]');

        // Assert
        expect(actual.assignedNodes()[0].textContent).toBe('Vitest user');
    });

    it('render description correctly', () => {
        // Arrange
        // 1) Create the custom element
        const element = document.createElement('user-card');
        const nameSpan = document.createElement('span');
        nameSpan.setAttribute('slot', 'description');
        nameSpan.textContent = 'Someone who is comfortable writing unit tests';
        element.appendChild(nameSpan);
        document.body.appendChild(element);

        // Act
        const actual = element.shadowRoot.querySelector('slot[name="description"]');

        // Assert
        expect(actual.assignedNodes()[0].textContent).toBe('Someone who is comfortable writing unit tests');
    });

    it('should render with default properties for the image', () => {
        // Arrange - Setup the stuff around what we testing
        const element = document.createElement('user-card');
        document.body.appendChild(element);

        // Act - Do the "thing" that we are testing
        const actual = element.shadowRoot.querySelector('img');

        // Assert - Check that the "thing" worked as expected
        expect(actual.src).toBe('https://placehold.co/80x80/0077ff/ffffff');
        expect(actual.alt).toBe('Placeholder Avatar');
    });
});
