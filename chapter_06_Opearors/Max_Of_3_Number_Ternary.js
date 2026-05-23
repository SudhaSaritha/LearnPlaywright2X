let a = 30;
let b = 20;
let c = 10;
let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log("max of a,b and c is: ", max);

/*Step-by-step
Compare a and b
If a is bigger:
compare a with c
Otherwise:
compare b with c*/