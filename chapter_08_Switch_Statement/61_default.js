let day = 10;
// with out break once case is true it will execute remaining all cases as well
//1-mon, 2-Tue, 3-Wed
switch (day) {
    case 0:
        console.log("sunday - Rest Day");
        break;
    case 1:
        console.log("Monday - sprint deployement");
        break;
    case 2:
        console.log("Tuesday - Development");
        break;
    case 3:
        console.log("Wednesday - code review");
        break;
    case 4:
        console.log("Thursday - Testing");
        break;
    case 5:
        console.log("Friday - Deployement & Retro ");
        break;
    case 6:
        console.log("Saturday - Rest Day");
        break;
    default:
        console.log("Invalid day value");
        break;
}