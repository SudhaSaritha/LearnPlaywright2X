let side1 = 10;
let side2 = 10;
let side3 = 12;

if (side1 === side2 && side2 === side3) {
    console.log("equilateral triangle");
} else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    console.log(" isosceles triangle");
} else {
    console.log("scalene triangle");
}