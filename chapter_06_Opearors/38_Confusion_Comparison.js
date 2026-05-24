// == vs === - The Confusion

// 1. Number vs String
console.log("--- Number vs String ---");
console.log(42 == "42");  // true  (coerces "42" → 42)
console.log(42 === "42"); // false (types differ)

// 2. Empty string & zero
console.log("\n--- Empty string & zero ---");
console.log(0 == "");  // true  ("" → 0)
console.log(0 === ""); // false
console.log("" == false); // true ("" → 0, false → 0)
console.log("" === false); // false

// 3. Boolean coercion
console.log("\n--- Boolean coercion ---");
console.log(true == 1);     // true  (true → 1)
console.log(true === 1);    // false
console.log(false == 0);    // true
console.log(false === 0);   // false
console.log(true == "1");   // true  (true → 1, "1" → 1)
console.log(true === "1");  // false
console.log(true == 2);     // false (true → 1, 1 != 2)

// 4. null & undefined
console.log("\n--- null & undefined ---");
console.log(null == undefined); // true  (special rule)
console.log(null === undefined); // false
console.log(null == 0);   // false (null only == undefined)
console.log(null == "");  // false
console.log(undefined == false); // false

// 5. Objects with valueOf/toString
console.log("\n--- Object coercion ---");
const a = { valueOf: () => 1 };
console.log(a == 1);  // true  (calls valueOf)
console.log(a === 1); // false

const b = { toString: () => "42" };
console.log(b == 42); // true  (calls toString → "42" → 42)
console.log(b === 42); // false

// 6. Arrays
console.log("\n--- Arrays ---");
console.log([] == false);  // true  ([] → "" → 0, false → 0)
console.log([] === false); // false
console.log([1] == 1);    // true  ([1] → "1" → 1)
console.log([1] === 1);   // false
console.log([1, 2] == "1,2"); // true
console.log([1, 2] === "1,2"); // false

// 7. NaN
console.log("\n--- NaN ---");
console.log(NaN == NaN);  // false (NaN never equals itself)
console.log(NaN === NaN); // false

// 8. +0 vs -0
console.log("\n--- +0 vs -0 ---");
console.log(+0 == -0);  // true
console.log(+0 === -0); // true (=== doesn't distinguish -0)

// 9. Objects (reference comparison)
console.log("\n--- Object references ---");
console.log({} == {});  // false (different references)
console.log({} === {}); // false
const obj = {};
console.log(obj == obj);  // true
console.log(obj === obj); // true

// 10. Wrapper objects
console.log("\n--- Wrapper objects ---");
console.log(new String("hello") == "hello"); // true  (unwraps)
console.log(new String("hello") === "hello"); // false
console.log(new Number(5) == 5); // true
console.log(new Number(5) === 5); // false
