function add(x, y, returnAs) {
    var result;
    if ((typeof x === "number" && typeof y === "number") ||
        returnAs === "as-number") {
        result = +x + +y;
    }
    else {
        result = x.toString() + y.toString();
    }
    return result;
}
var num1 = "5";
var num2 = 2.6;
var printResult = true;
var result1 = add(5, 2.6, "as-number");
console.log(result1);
var result2 = add("5", 265, "as-number");
console.log(result2);
var result3 = add("Shubh", "Pundir", "as-text");
console.log(result3);
