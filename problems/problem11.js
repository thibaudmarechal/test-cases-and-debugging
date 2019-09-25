let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [[1, 2, 3], [1, 'hi', 5]];

let outputs = [6, 6];

/*
  Make this function return the sum of all the numbers in the input array.
  If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
// REDUCE MEHTOD 
  return arr.reduce((acc, curr) => {
    return typeof curr ==='number' ? acc + curr : acc;
  }, 0)
// OR DO THIS 
  if(arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number') {
      sum += arr[i]
    }
  return sum;
  }
  // END
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
