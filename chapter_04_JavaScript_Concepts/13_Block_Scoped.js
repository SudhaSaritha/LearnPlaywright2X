function test() {

    if (true) {
        let b = 20;
        console.log(b); // accessible
    }

    console.log(b); // Error
}

test();

/*Output:

20
ReferenceError*/