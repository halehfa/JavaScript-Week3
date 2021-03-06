'use strict';
/* -----------------------------------------------------------------------------

1. Complete the function named `giveCompliment`as follows:

   - It should take a single argument: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as the function's argument.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(name) {
  const compliments = ['great', 'awesome', 'perfect', 'nice', 'good', 'amazing', 'magnificent', 'incredible', 'wonderful', 'special'];
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  return 'You are ' + randomCompliment + ',  ' + name + '!';
}

// TODO substitute your own name for "HackYourFuture"
const myName = 'Haleh';

console.log(giveCompliment(myName));
console.log(giveCompliment(myName));
console.log(giveCompliment(myName));

const yourName = 'Hali';

console.log(giveCompliment(yourName));
console.log(giveCompliment(yourName));
console.log(giveCompliment(yourName));

// ! Do not change or remove the code below
module.exports = giveCompliment;
