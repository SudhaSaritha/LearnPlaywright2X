let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "RJ will go goa" : "no goa";
console.log(rj_will_goa);

let a = 10;
a += 10;
//a=+10; is a invalid statement
console.log(a);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Passed" : "Failed";
console.log(testResult); //passed

let environment = "staging";
let baseUrl = environment === "production"
    ? "https://api.example.com" :
    "https://staging-api.example.com";
console.log(baseUrl); //https://staging-api.example.com


let isCI = true;
let browserMode = isCI ? "Headless" : "headed";
console.log("Launching the browser in ", browserMode, " mode");

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

//Nested Ternary Operator
//multiple conditions

let age = 26;
let is_pramod_goa = age > 26
    ? "Yes, he will go"
    : "else he will not go";
console.log(is_pramod_goa);


let age_pramod = 45;
let is_pramod_d =
    age_pramod > 18
        ? (age_pramod > 26 ? "Drink" : "No Drink")
        : "NO GOA";
console.log(is_pramod_d);//Drink

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);

let temp = 35;
let feel =
    (temp >= 40) ? "Very Hot" :
        (temp >= 30) ? "Hot" :
            (temp >= 20) ? "Warm" :
                (temp >= 10) ? "Cool" : "Cold";
console.log("Temperature:", temp, "| Feel:", feel);





