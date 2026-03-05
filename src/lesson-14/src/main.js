import { greetUser } from './utils';
import utilities from './utils';
import dayjs from 'dayjs'; // Read the docs on dayjs
//     \___/      \_____/
//      |           | Name of the package/location for the JavaScript module
//      | The function/object we are grabbing from this package.
//        This is the "thing" that the 'dayjs' package exported as it's "default".
// You can search for 3rd-party packages like dayjs on
// npmjs.com and see the ReadMe for whatever packages
// you have searched for.
console.log('Lesson 14 starter loaded');
const user = prompt('Enter your name') || utilities.defaultName;
const greeting = greetUser(user);
const currentDate = dayjs().format('dddd, MMMM, D, YYYY');
document.querySelector('#today').textContent = `${greeting} Today is ${currentDate}`;
