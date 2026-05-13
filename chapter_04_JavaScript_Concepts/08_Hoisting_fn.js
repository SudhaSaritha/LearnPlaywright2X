
/*Hoisting is JavaScript's default behavior of moving 
variable and function **DECLARATIONS** to the 
top of their containing scope during the compilation 
phase, BEFORE the code is actually executed.*/

//getUserStatus();

function getUserStatus() {
    //var status_code:JS Engine (optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();

/*Note: var is function_scoped, so status_code is hoisted to the top of the function scope,
 but its assignment remains in place. Therefore, when 
the first console.log is executed, status_code is 
undefined. After the assignment, the second console.log
 outputs "Active".*/

/*Output:
undefined
Active*/