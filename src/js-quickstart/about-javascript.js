/* about-javascript.js
    This is a multi-line comment, where I can put
    notes, comments, emojiis 🚀 or whatever.
    This is NOT going to be instructions, just
    information for me and other people reading
    this code.
    This sample JavaScript can be run without
    a web server or any HTML/CSS. Just run it
    in node:

    node --watch about-javascript.js

*/
// Single-line comments start with two slashes
console.log('About JavaScript....');
console.log('====================');
// The two lines above are each an example of
// Program Statements.
// Program Statements end in a semicolon.

// variable examples
const greeting = 'Hello';
let count = 3;
const isActive = true;

console.log(greeting, count, isActive);

console.log(); // blank line
// Variables hold information
console.log('Type of greeting is:', typeof greeting);
// The following won't work
// because I stated that the
// greeting variable was
// constant (unchanging)
// greeting = 'Goodbye';
console.log('Type of count is:', typeof count);
console.log('Type of isActive is:', typeof isActive);

// A variable declared/created
// with the let keyword is a
// variable whose value we CAN
// change
count = 'bob';
console.log();
console.log(typeof count);
