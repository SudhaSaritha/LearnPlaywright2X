let statusCode = 404;

if (statusCode >= 200 && statusCode <= 299) {
    console.log("HTTP ->Success");
} else if (statusCode >= 300 && statusCode <= 399) {
    console.log("HTTP ->Redirection");
} else if (statusCode >= 400 && statusCode <= 499) {
    console.log("HTTP ->Client Error");
} else if (statusCode >= 500 && statusCode <= 599) {
    console.log("HTTP ->Server Error");
} else {
    console.log("HTTP->Invalid");
}