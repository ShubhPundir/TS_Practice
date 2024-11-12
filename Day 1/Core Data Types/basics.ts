function add(x: number, y: number, showResult: boolean, phrase: string) {
	// if(typeof x !== "number" || typeof y !== "number")
    let result = x+y;
    if(showResult)
        console.log(phrase + result);
    else
        return result;
    // throw new Error("Incorrect Input!");

}

const num1 = "5";
const num2 = 2.6;
let printResult = true;

const result = add(+num1, +num2, printResult,"Result is ");
console.log(result);

