"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is " + num);
}
let combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 5));
