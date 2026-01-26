/* The code for the flow-control statements has
   already been provided for you. We will be
   walking through the code line-by-line using
   the browser debugging tools.
*/
// 🚨 Set a breakpoint in the Browser Dev Tools
//    on the following line of code.
console.log('Lesson 04 starter loaded');

// 1. Simple if
// The block of code immediately after the "conditional expression" (the t/f question) is what code runs on the "condition" of it being true.
const x = 5;
if (x > 0) {
  console.log('x is positive');
}

// 2. if-else
// An "else" block (or portion) to the "if" statement is
// optional. It represents the code that would be run should
// the conditional expression be false.
if (x % 2 === 0) { // The === is called the "strict equal"
  console.log('x is even');
} else {
  console.log('x is odd');
}

// 3. Nested if-else
if (x > 10) {
  console.log('x is greater than 10');
} else if (x < 0) {
  console.log('x is non-positive');
} else {
  console.log('x is between 1 and 10');
}

// 4. while loop
let count = 3;

while (count > 0) {
  console.log('Countdown:', count);
  count = count - 1;
}

// 5. do-while loop
let i = 0;

do {
  console.log('i is', i);
  i++;
} while (i < 3);

// 6. for loop
for (let j = 0; j < 3; j++) {
  console.log(`j = ${j}`);
}

// Student TODO:
// 7. Snippet with bugs for debugging practice
// Snippet with bugs for debugging practice - uncomment when ready
/*
const num = 10;

if (num < 5) {
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

// Count from zero to 3
let k = 0;
while (k < 3) {
  k + 1;
	console.log(k);
}
*/
