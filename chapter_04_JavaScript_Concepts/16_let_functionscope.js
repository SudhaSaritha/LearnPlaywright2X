let a = 10;//Global scope

console.log(a);

function printHello() {
    console.log("hello, the testing academy");
    let a = 20;//local scrope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("the value of a is:" + a);
}
printHello();

console.log("G-> " + a);

/*10
hello, the testing academy
20
30
the latest value of a is:20
G-> 10*/

//the value of a is now 20 so let is a block scoped not a function scoped
