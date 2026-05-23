// ??-->checking null or undefined value
console.log(null >= 0); // null == 0 or null > 0
console.log(null === 0);

// ?? Nullish-->nullish is used to replace null or undefined value with a default value 

let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);// nandani milk

//if amul is null or undefined then it will return "nandani milk" otherwise it will return the value of amul

let amul123 = "Amul is present";
let milk_required_res = amul123 ?? "nandani milk";
console.log(milk_required_res);// Amul is present