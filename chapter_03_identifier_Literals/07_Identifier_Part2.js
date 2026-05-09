// Naming Conventions (Cases) in JavaScript

// 1. camelCase (most common in JS - variables, functions)
var firstName = "John";
var lastName = "Doe";
var totalAmount = 100;
function getUserName() { return firstName; }

// 2. snake_case (used in some languages, rare in JS)
var first_name = "John";
var last_name = "Doe";
var total_amount = 100;
function get_user_name() { return first_name; }

// 3. PascalCase (used for classes / constructors)
var FirstName = "John"; // not typical usage
function Person() { this.name = "John"; }
function UserAccount() { return "account"; }

// 4. UPPER_SNAKE_CASE / SCREAMING_SNAKE_CASE (constants)
var MAX_VALUE = 100;
var API_KEY = "abc123";
var DEFAULT_TIMEOUT = 5000;

// 5. lowercase (single-word variables)
var name = "John";
var age = 30;
var total = 200;

// 6. Hungarian notation (prefix with type - legacy)
var strName = "John";      // string
var numCount = 10;         // number
var arrItems = [1, 2, 3];  // array
var fnCallback = function() {}; // function
var bIsValid = true;       // boolean
var objPerson = {};        // object

// 7. _camelCase with underscore prefix (internal/private convention)
var _privateVar = "hidden";
var _internalFn = function() { return "internal"; };

// 8. __dunder__ (double underscore - Python style, rarely in JS)
var __internal__ = "dunder value";

// 9. kebab-case (NOT valid in JS - uses hyphens)
// var first-name = "John"; // SyntaxError: hyphen not allowed

// 10. Train-Case / Capitalized-Kebab (NOT valid in JS)
// var First-Name = "John"; // SyntaxError

// 11. COBOL-CASE / UPPER-KEBAB (NOT valid in JS)
// var FIRST-NAME = "John"; // SyntaxError

// 12. flatcase / alllowercase
var fullname = "John Doe";
var totalamount = 100;

// 13. Mixed / abbreviated
var getURL = "https://example.com";
var parseHTML = function() {};
var convertToJSON = function() {};

// Comparison: same name in different cases
// camelCase:    firstName
// snake_case:   first_name
// PascalCase:   FirstName
// SCREAMING:    FIRST_NAME
// flatcase:     firstname
// kebab-case:   first-name (INVALID)
// Hungarian:    strFirstName
