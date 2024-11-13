type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function add(x: Combinable, y: Combinable, returnAs: ConversionDescriptor) : Combinable {
	let result;
	if (
		(typeof x === "number" && typeof y === "number") ||
		returnAs === "as-number"
	) {
		result = +x + +y;
	} else {
		result = x.toString() + y.toString();
	}
	return result;
}

const num1 = "5";
const num2 = 2.6;
let printResult = true;

const result1 = add(5, 2.6, "as-number");
console.log(result1);

const result2 = add("5", 265, "as-number");
console.log(result2);

const result3 = add("Shubh", "Pundir", "as-text");
console.log(result3);
