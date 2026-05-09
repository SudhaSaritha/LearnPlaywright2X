// VALID identifiers:
var $ = 10;           // $ is allowed
var _a = 12;          // _ is allowed
var p = 10;           // letter is allowed
var myVar2 = 1;       // letters + digits after first char
var userName = "John"; // camelCase convention
var $total = 100;     // $ anywhere (first char)
var _private = "yes"; // _ anywhere (first char)
var π = 3.14;         // Unicode letter allowed (ES6+)

// INVALID identifiers (uncomment to see errors):
// var 1st = 1;       // cannot START with a digit
// var my-var = 1;    // hyphen is NOT allowed
// var var = 1;       // reserved keyword (var, let, const, if, etc.)
// var @name = 1;     // @ is NOT allowed
// var #hash = 1;     // # is NOT allowed
// var class = 1;     // reserved keyword