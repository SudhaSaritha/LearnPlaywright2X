/*Simple Difference
Feature	Function Scope	Block Scope
Keyword	var	let, const
Accessible inside whole function?	Yes	No
Accessible outside {} block?	Yes	No
Example Comparing Both
function demo() {

    if (true) {
        var x = 1;
        let y = 2;
    }

    console.log(x); // Works
    console.log(y); // Error
}

demo();
Best Practice

Use:

let → when value can change
const → when value should not change