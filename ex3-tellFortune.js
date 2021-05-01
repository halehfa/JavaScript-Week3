'use strict';
/*------------------------------------------------------------------------------
Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments: number of children (`number`), partner's 
     name (`string`), geographic location (`string`) and job title (`string`).
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/
const numKids = [
  0, 1, 2, 3
];

const partnerNames = [
  'Behzad', 'James', 'Mamz', 'Ali'
];

const locations = [
  'Esf', 'Teh', 'Shrz', 'NY'
];

const jobTitles = [
  'Lawyer', 'Web Developer', 'Architect', 'Doctor'
];

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
}

function tellFortune(numOfChildren, partnerName, location, job) {
  const numKids = selectRandomly(numOfChildren);
  const name = selectRandomly(partnerName);
  const loc = selectRandomly(location);
  const jobTitle = selectRandomly(job);
  return 'You will be a ' + jobTitle + ' in ' + loc + ', married to ' + name + ' with ' + numKids + ' kids.';
}

console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));

// ! Do not change or remove the code below
module.exports = tellFortune;
