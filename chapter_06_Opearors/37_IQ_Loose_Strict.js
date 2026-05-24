console.log(0 == "");
console.log(0 == "0");
console.log("" == "0"); // 🤯 (transitivity broke)

/*## Transitivity broken
```
"" == 0      // true  → "" → Number("") → 0, 0 == 0
"0" == 0     // true  → "0" → Number("0") → 0, 0 == 0
"" == "0"    // false → both strings, compared as-is
```
If `==` transitive: `a==b && b==c` → `a==c`. Here `"" == 0` and `0 == "0"` 
both true, but `"" == "0"` false. Broken.*/



console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);