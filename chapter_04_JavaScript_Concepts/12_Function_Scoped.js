//Function scoped

function test() {
    var a = 10;

    if (true) {
        console.log(a); // accessible
    }

    console.log(a); // accessible
}

test();

/*Output:

10
10

Because var belongs to the whole function.*/