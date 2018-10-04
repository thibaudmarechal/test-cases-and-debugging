let verifyEquals = require('./verify-equals.js');

// we need 5 test cases. 
let inputs = [
    [[0, 1, 2, 3], [1, 3, 4, 5]],
    [[1,2,3], [1,2,3]],
    [2,3]
]

let outputs = [
    [0, 4, 5],
    [],
    undefined
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays

HINTS: 
   - Use a for loop inside another for loop
*/
function f(input) {

}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
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