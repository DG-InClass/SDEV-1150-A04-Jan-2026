// main.js
// For most project today, the ES Module use of import
// statements is the best approach.
// const dayjs = require("dayjs"); // "old" commonjs way
import dayjs from 'dayjs'; // modern ES Module way

const now = dayjs();
console.log('Current date:', now.format('YYYY-MM-DD'));
console.log('Current time:', now.format('HH:mm:ss'));
