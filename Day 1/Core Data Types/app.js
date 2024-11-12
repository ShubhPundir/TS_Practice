function add(x, y, showResult, phrase) {
    // if(typeof x !== "number" || typeof y !== "number")
    var result = x + y;
    if (showResult)
        console.log(phrase + result);
    else
        return result;
    // throw new Error("Incorrect Input!");
}
var num1 = "5";
var num2 = 2.6;
var printResult = true;
var result = add(+num1, +num2, printResult, "Result is ");
console.log(result);
