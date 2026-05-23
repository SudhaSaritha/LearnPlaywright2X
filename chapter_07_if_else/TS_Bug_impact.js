let BugImpact = 9;

if (BugImpact >= 1 && BugImpact <= 3) {
    console.log("Bug Impact is:  -> Low");
} else if (BugImpact >= 4 && BugImpact <= 6) {
    console.log("Bug Impact is:   -> Medium");
} else if (BugImpact >= 7 && BugImpact <= 8) {
    console.log("Bug Impact is:  -> High");
} else if (BugImpact >= 9 && BugImpact <= 10) {
    console.log("Bug Impact is:  -> Critical");
} else {
    console.log("Bug Impact is:  ->Invalid score");
}