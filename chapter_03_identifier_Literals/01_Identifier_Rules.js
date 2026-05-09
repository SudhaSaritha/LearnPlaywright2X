// Rule 1: Start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
// Valid:
var name = "John";
var _count = 5;
var $price = 99;
var firstName = "Jane";
var _ = "underscore only";
var $$ = "double dollar";

// Invalid:
// var 1name = "John";    // starts with digit
// var -count = 5;        // starts with hyphen
// var @price = 99;       // starts with @
// var #tag = "hash";     // starts with #
// var %percent = 10;     // starts with %

// Rule 2: After first char, can also include digits (0-9)
// Valid:
var item2 = "book";
var address1 = "NYC";
var num123 = 456;
var user1address2 = "multi digits";
var test99 = "ending digits";

// Invalid:
// var 2item = "book";   // digit at start
// var item-2 = "book";  // hyphen (not a digit) inside
// var item 2 = "book";  // space inside

// Rule 3: Cannot be a reserved keyword
// Valid:
var myVar = 10;
var myLet = 20;
var _class = 30;       // underscore prefix makes it valid
var $const = 40;       // dollar prefix makes it valid

// Invalid:
// var var = 1;         // reserved keyword
// var let = 2;         // reserved keyword
// var const = 3;       // reserved keyword
// var class = 4;       // reserved keyword
// var function = 5;    // reserved keyword
// var return = 6;      // reserved keyword
// var if = 7;          // reserved keyword
// var else = 8;        // reserved keyword
// var for = 9;         // reserved keyword
// var while = 10;      // reserved keyword

// Rule 4: Case-sensitive
// Valid (each is a distinct identifier):
var foo = "lower";
var Foo = "upper";
var FOO = "all caps";
var fOO = "mixed 1";
var foO = "mixed 2";
// All five above are different variables

// Invalid:
// var foo = "duplicate"; // SyntaxError if foo already declared in same scope

// Rule 5: Unicode letters allowed (ES6+)
// Valid:
var ñ = "Spanish";
var π = 3.14;
var 你好 = "Chinese";
var café = "coffee";
var déjà = "already";
var öl = "beer";

// Invalid:
// var 🎉 = "party";     // emoji is NOT a valid identifier
// var 😊 = "smile";     // emoji is NOT allowed
