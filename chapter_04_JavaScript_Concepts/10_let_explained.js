/*`let` is **block-scoped** (lives only inside `{ }`), 
can be **reassigned**, but **cannot be redeclared** 
in the same scope*/
let a = 10;
//a=20; ->reassignment allowed
//let a=30;//redeclaration not allowed

//Reassignment allowed
let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:" + retryCount);

//redeclaration not allowed
//let retryCount=5; //syntax error: Identifier 'retryCount' has already been declared
//syntaxerror: redeclaration is not allowed in the same scope

//let is block scoped

let testStatus = "pending";
if (testStatus === "pending") {
    let executiontime = 1200;
    console.log("Test execution time is: " + executiontime); //1200

}

//console.log(executiontime); //ReferenceError: executiontime is not defined

//{} is a block, let lives only inside the block
//let is not accessible outside the block, it is block scoped
//let is more trustworthy than var, it is not a flipper, it is not dual faced
//if(){}
//function name(){}

//let =loyal
//var=flipper, not trustworthy, dual faced