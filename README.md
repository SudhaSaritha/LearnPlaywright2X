# LearnPlaywright2X

> A step-by-step learning repository for **Playwright** automation testing, built on a foundation of **JavaScript** core concepts.

---

## About

This repository is designed for beginners who want to learn Playwright for browser automation. It starts with **JavaScript fundamentals** (variables, functions, identifiers, comments) and progresses toward Playwright-specific topics. Each chapter builds on the previous one, making it easy to follow along.

---

## Repository Structure

```
LearnPlaywright2X/
├── chapter_01_Basics/              # JavaScript Basics
│   └── 01_Basics.js               # console.log, functions, loops
├── chapter_02_Javascript_Concepts/ # JavaScript Variables
│   ├── 05_JS_Basics.js            # var, let, const
│   └── please                     # (placeholder)
├── chapter_03_identifier_Literals/ # Identifiers & Literals
│   ├── 01_Identifier_Rules.js     # Identifier naming rules
│   ├── 06_Identifier_Rules.js     # Valid vs invalid identifiers
│   ├── 07_Identifier_Part2.js     # Naming conventions (camelCase, PascalCase, etc.)
│   ├── 08_Comments.js             # Single-line & multi-line comments
│   └── VS_Code_Keyboard_shortcut_Windows.md  # VS Code shortcuts reference
├── chapter_04_JavaScript_Concepts/ # JavaScript Concepts (Hoisting, Scoping)
│   ├── 08_var_let_const.js        # var, let, const differences
│   ├── 08_Hoisting_fn.js          # Function hoisting
│   ├── 09_var_explained.js        # var in detail
│   ├── 10_let_explained.js        # let in detail
│   ├── 11_const_explained.js      # const in detail
│   ├── 12_Function_Scoped.js      # Function scope
│   ├── 13_Block_Scoped.js         # Block scope
│   ├── 14_Function_Block_Scoped.js# Function vs block scope
│   ├── 15_var_Functionscroped.js  # var function scoping
│   ├── 16_let_functionscope.js    # let function scope
│   └── 17_Hosting.js              # Hoisting explained
├── chapter_06_Opearors/           # JavaScript Operators
│   ├── 40_Strin_Con_Op.js        # String concatenation
│   ├── 41_Ternary_Op.js          # Ternary operator
│   ├── 42_Type_Op.js            # typeof operator
│   ├── 43_Null_Op.js            # Nullish coalescing (??)
│   ├── 44_Incre_Decre_Op.js     # Pre-increment/decrement
│   ├── 45_Post_Increement.js    # Post-increment
│   ├── 46_INCREMENT_D.js        # Increment/decrement advanced
│   ├── 47_Advanced_ID.js        # Advanced increment/decrement
│   ├── Max_Of_3_Number_Ternary.js# Max of 3 numbers (ternary)
│   ├── Max_TwoNum_Ternary.js     # Max of 2 numbers (ternary)
│   └── Task_Incre_Decre.js      # Increment/decrement tasks
├── chapter_07_if_else/           # if-else Statements
│   ├── 48_if_else.js            # Basic if-else
│   ├── 49_if_elseif_else.js     # if-else if-else ladder
│   ├── 50_REAL_IF_ELSE.js       # Real-world if-else examples
│   ├── 51_API_IF_ELSE.js        # API status code handling
│   ├── 52_IA_IF_ELSE.js         # Truthy/falsy in if-else
│   ├── 53_IF_ELSE_real.js       # Real-world login check
│   ├── 54_IQ.js                # Interview questions
│   ├── 55_IE.js                # Single if allowed
│   ├── 56_Even_If_Else.js      # Even/odd check
│   ├── 57_Marks_If_Else.js     # Marks grading
│   ├── 58_LEAP_YEAR.js         # Leap year logic
│   ├── TS_Bug_impact.js        # Task: Bug impact severity
│   ├── TS_Build_HealtReport.js # Task: Build health report
│   ├── TS_HTTP_Statuscode.js   # Task: HTTP status codes
│   ├── Ts_Log_Logout_Failed.js # Task: Login/logout failure
│   └── TS_TestCase_Pass.js     # Task: Test case pass/fail
├── chapter_08_Switch_Statement/  # Switch Statements
│   ├── 59_Switch.js            # Basic switch
│   ├── 60_no_Break.js          # Switch without break (fall-through)
│   ├── 61_default.js           # Default case
│   ├── 62_REAL_TIME_Example.js # Real-time API response handling
│   ├── 63_Switch_Group.js      # Grouping cases (browser check)
│   ├── 64_IQ.js                # Interview question (fruit)
│   ├── 65_IQ2.js               # Interview question (test score)
│   ├── 66_IQ3.js               # Interview question (ternary in switch)
│   ├── 67_IQ4.js               # Interview question (type coercion)
│   └── IQ5.js                  # Interview question (status code)
├── chapter_09_User_Input/        # User Input Methods
│   ├── 68_User_Input.js        # Browser prompt (limitations)
│   ├── 69_Node_readline.js     # Node.js readline module
│   └── 70_Prompt_sync.js       # prompt-sync package
├── chapter_10_Loops/            # Loops
│   ├── 71_For_Loop.js          # Basic for loop
│   ├── 72_For_Loop.js          # For loop variations
│   ├── 73_For_Loop2.js         # For loop examples
│   ├── 74_IQ.js                # Interview question (loop)
│   ├── 75_For_OF_IN_EACH.js    # for-of, for-in, forEach
│   ├── 76_While_Loop.js        # While loop
│   ├── 77_DO_WHILE.JS          # Do-while loop
│   ├── 78_Do_While.js          # Do-while examples
│   ├── 79_IQ.js                # Interview question
│   ├── 80_IQ.js                # Interview question
│   ├── 81_IQ.js                # Interview question
│   ├── TS_FIZZ_BUZZ_Print.js   # Task: FizzBuzz
│   └── TS_Tringle.js           # Task: Triangle pattern
```

---

## Chapter Details

### 1. Chapter 01 — Basics
- JavaScript entry point with `console.log`
- Function definitions and basic arithmetic
- `for` loop iteration

### 2. Chapter 02 — JavaScript Concepts
- Variable declaration using `var`
- Reassigning variable values
- `console.log` for output

### 3. Chapter 03 — Identifiers & Literals
- **Identifier rules**: allowed characters, reserved keywords, case sensitivity, Unicode support
- **Naming conventions**: camelCase, snake_case, PascalCase, UPPER_SNAKE_CASE, Hungarian notation, kebab-case (invalid), flatcase, etc.
- **Comments**: single-line (`//`) and multi-line (`/* */`) syntax
- **VS Code shortcuts**: handy keyboard reference for Windows users

### 4. Chapter 04 — JavaScript Concepts
- **var, let, const**: scope, redeclaration, and reassignment differences
- **Variable hoisting** and **loop counter leakage** with `var`
- **Function scope vs block scope** explained with practical examples
- **Hoisting**: function declarations vs variable hoisting

### 5. Chapter 06 — Operators
- **String concatenation** with `+` operator
- **Ternary operator** (`? :`) for conditional expressions
- **typeof operator** for type checking
- **Nullish coalescing** (`??`) for null/undefined defaults
- **Increment/decrement operators**: pre vs post (`++`, `--`)
- **Tasks**: max of 2/3 numbers using ternary

### 6. Chapter 07 — if-else Statements
- Basic `if`, `if-else`, and `if-else if-else` constructs
- **Truthy/falsy** values in conditions
- Real-world examples: API status codes, login validation
- **Leap year** logic implementation
- **Tasks**: Bug impact severity, build health report, HTTP status codes, login/logout failure, test case pass/fail

### 7. Chapter 08 — Switch Statement
- Basic `switch` syntax
- **Fall-through behavior** (missing `break`)
- **Default case** usage
- **Grouping cases** for shared logic (e.g., browser detection)
- Interview questions covering edge cases (type coercion, grouping)

### 8. Chapter 09 — User Input
- **Browser `prompt()`** and its limitations in Node.js
- **Node.js `readline`** module for CLI input
- **`prompt-sync`** package as a simple synchronous alternative

### 9. Chapter 10 — Loops
- **`for` loop**: basic iteration, variations
- **`while` loop**: condition-based looping
- **`do-while` loop**: guaranteed execution
- **`for-of`**, **`for-in`**, and **`forEach`** for iterating collections
- **Tasks**: FizzBuzz, triangle pattern printing
- Interview questions covering loop behavior and edge cases

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Playwright](https://playwright.dev/) (`npm init playwright@latest`)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/SudhaSaritha/LearnPlaywright2X.git

# Navigate to the project
cd LearnPlaywright2X

# Run any JavaScript file with Node
node chapter_01_Basics/01_Basics.js
```

---

## Author

**Saritha** — Learning and sharing Playwright automation step by step.
