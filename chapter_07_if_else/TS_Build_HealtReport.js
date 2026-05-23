let Health_Percentage = 69;

if (Health_Percentage === 100) {
    console.log("Green Build");
} else if (Health_Percentage >= 90) {
    console.log(" 🟡Stable (investigate failures)");
} else if (Health_Percentage >= 70) {
    console.log("Unstable");
} else {
    console.log(" 🔴Broken Build (block deployment)");
}