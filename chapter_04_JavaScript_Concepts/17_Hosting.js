//JS Engine
//LINE BY LINE,JIT Compilation,Memory Management,Garbage Collection,Event Loop,Call Stack,Web APIs,Callback Queue,Microtask Queue
console.log(greeting);
var greeting = "Hello";
cosole.log(greeting);
/*Output:
undefined
Hello, the Testing Academy!*/

/*In the above code, the first console.log(greeting) is 
 executed before the variable greeting is assigned a 
value. Due to hoisting, the declaration of greeting 
is moved to the top of its scope, but its assignment 
remains in place. Therefore, when the first console.log is 
executed, greeting is undefined. After the assignment, the 
second console.log outputs "Hello, the Testing Academy!"*/

//behind the scenes

//var greeting;      <-- declaration is hoisted to the top
//console.log(greeting); // Output: undefined
//greeting = "Hello, the Testing Academy!"; // Assignment remains in place
//console.log(greeting); // Output: Hello, the Testing Academy!

//var a;
console.log(a);
var a = "sarita";
console.log(a);

//output:
//undefined
//sarita




