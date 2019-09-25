let verifyEquals = require('./verify-equals.js');

// we need 8 test cases. I've provided the first 2
let inputs = [['hello', 4], ['', 2], ['yo', 1], ['go0dbye', 2], ['', 3], ['yo', 0], ['boya', 3], ['', 2]];

let outputs = ['o', undefined,'o','0', undefined, 'y', 'a', undefined];

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  let str = arr[0];
  let pos = arr[1];
  if(pos > str.length) return undefined;
  return str.charAt(pos)
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
runTest(5);
runTest(6);
runTest(7);
console.log('All tests passed for ' + __filename);
