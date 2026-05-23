let Attempts = 3;

if (Attempts === 0) {
    console.log("Login Successful");
} else if (Attempts === 2) {
    console.log(" 1 Attempt left before lockout");
} else if (Attempts === 3) {
    console.log(" 🔒Account Locked -Contact support");
} else {
    console.log("invalid attempts")
}