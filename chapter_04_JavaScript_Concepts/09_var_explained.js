var a = 10;//Global scope


//var is a function scoped
console.log(a);

function printHello() {
    console.log("hello, the testing academy");
    var a = 20;//local scrope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("the latest value of a is:" + a);
}
printHello();

console.log("G-> " + a);

var a = 50;
console.log(a);

//var= fliper, not trust worthy, dual faced
/* we can change the value unlimted number of times
does not matter this is within the function or
within the statement or outside the function*/
