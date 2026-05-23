let day = 5;
// with out break once case is true it will execute remaining all cases as well
//1-mon, 2-Tue, 3-Wed
switch (day) {
    case 0:
        console.log("sunday - Rest Day");
    case 1:
        console.log("Monday - sprint deployement");
    case 2:
        console.log("Tuesday - Development");
    case 3:
        console.log("Wednesday - code review");
    case 4:
        console.log("Thursday - Testing");
    case 5:
        console.log("Friday - Deployement & Retro ");
    case 6:
        console.log("Saturday - Rest Day");
    default:
        console.log("Invalid day value");
}