//where ever we are create the boolean it will start with"is" this is the convention
// statement inside the statement
let isLoggedIn = "true";
let userRole = "editor";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("welcome Editor -Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("welcome viewer -Read-only access.");
    } else {
        console.log("no idea you may a guest role");
    }
} else {
    console.log(" you are not logged in");
}


