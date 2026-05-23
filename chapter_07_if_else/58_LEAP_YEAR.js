// rules of the Leap Year
// It is divisible by 4 (year%4===0)
// But not divisible by 100 (year%100!==0)
// Except if it is also divisible by 400 (year%400===0)

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is Leap Year")
} else {
    console.log(year + " is not a Leap Year");
}