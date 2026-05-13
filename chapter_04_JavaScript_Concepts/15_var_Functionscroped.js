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

//the value of a is now 30 so var is a function scoped