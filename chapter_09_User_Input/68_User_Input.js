//prompt we will for user input but some issue so we can't use this
//prompt is not migrated into the node.js it will run only in the browser
//prompt only available in javascript engine and browser only
let num = prompt("Enter a number:");

num = Number(num); // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}