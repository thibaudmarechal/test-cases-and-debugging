let verifyEquals = require('./verify-equals.js');

// we need 5 test cases. 
let inputs = [
  
]

let outputs = [
  
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
    
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("All tests passed for " + __filename)