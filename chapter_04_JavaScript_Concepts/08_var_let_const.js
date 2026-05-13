var v = 10;
let l = 20;
const c = 3.14;

var i = 20;


var browser = "chrome";
var browser = "firefox";//redeclaration allowed
browser = "edge";//reassignment allowed

var testcases = ["login", "logout", "signup"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running Test" + testcases[i]);
}
console.log("loop counter leaked outside:  " + i);

console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");

//to overcome this we have create the function and call that function
function runTestcases() {
    console.log("Hi from function");
}

runTestcases();
runTestcases();
