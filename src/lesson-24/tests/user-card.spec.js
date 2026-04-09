// @vitest-environment jsdom
// ~/tests/user-card.spec.js
// In the terminal, run:  pnpm test
//                   or:  pnpm test:watch
import { expect, it, test, beforeEach, afterEach, describe } from 'vitest';
import '../src/user-card'; // import the web component definition

// The describe is used to group related tests in a "test suite"
describe('UserCard component', () => {
    let element; // A variable shared by all the tests in this test suite

    beforeEach(() => {
        // Common setup for a "clean" start on each test
        document.body.innerHTML = ''; // One way to "clean" fake DOM
        element = document.createElement('user-card');
        document.body.appendChild(element);
    });

    afterEach(() => {
        // Cleanup after each test
        element.remove();
        element = null;
    });

    /* My typical workflow when designing/developing some component is to
       list out all my test/spec names
       - should set the image.src based on the avatar attribute
          <user-card avatar="https://marvel.comics.com/wolverine.png">
       - should change followed status to true programmatically
            element.follow()
       - should change followed status to false programmatically
            element.unfollow()

    */
    it('should not be following the character by default', () => {
        // Arrange

        // Act
        let actual = element.followed;

        // Assert
        expect(actual).toBe(false);
    });

    it('render name correctly', () => {
        // Arrange
        // 2) <span slot="name">Vitest user</span>
        const nameSpan = document.createElement('span');
        nameSpan.setAttribute('slot', 'name');
        nameSpan.textContent = 'Vitest user';
        // 3) Put the slotted content into the custom element 😢
        element.appendChild(nameSpan);

        // Act
        const actual = element.shadowRoot.querySelector('slot[name="name"]');

        // Assert
        expect(actual.assignedNodes()[0].textContent).toBe('Vitest user');
    });

    it('render description correctly', () => {
        // Arrange
        const nameSpan = document.createElement('span');
        nameSpan.setAttribute('slot', 'description');
        nameSpan.textContent = 'Someone who is comfortable writing unit tests';
        element.appendChild(nameSpan);

        // Act
        const actual = element.shadowRoot.querySelector('slot[name="description"]');

        // Assert
        expect(actual.assignedNodes()[0].textContent).toBe('Someone who is comfortable writing unit tests');
    });

    it('should render with default properties for the image', () => {
        // Arrange - Setup the stuff around what we testing
        // Act - Do the "thing" that we are testing
        const actual = element.shadowRoot.querySelector('img');

        // Assert - Check that the "thing" worked as expected
        expect(actual.src).toBe('https://placehold.co/80x80/0077ff/ffffff');
        expect(actual.alt).toBe('Placeholder Avatar');
    });
});
