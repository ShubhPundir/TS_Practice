function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log("Result is " + num);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 5));
