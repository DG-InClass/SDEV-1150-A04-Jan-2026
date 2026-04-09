// @vitest-environment jsdom
// ~/tests/user-card.spec.js
// In the terminal, run:  pnpm test
//                   or:  pnpm test:watch
import { expect, it, test, describe } from 'vitest';
import '../src/user-card'; // import the web component definition

describe('UserCard component', () => {
    /* My typical workflow when designing/developing some component is to
       list out all my test/spec names
       - should not be following the character by default
       - render name correctly
       - render description correctly

    */
    it.todo('', () => {});
    it.todo('', () => {});
    it.todo('', () => {});

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
