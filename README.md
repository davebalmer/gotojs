gotojs
======

A delightfully evil abomination of eval() with goto(); all in global space
by Dave Balmer.

It's a lightweight, low-level library that:

- Introduces proper sequential programming based on line numbers, something sorely missing from JavaScript
- Reduces complexity by eliminating the need for semicolons
- Works exclusively in global space; no more var statements for your variables (seriously, don't use them or something may break)
- Simple, direct control of code execution with goto()
- Powered by eval()

Use
---

```language-javascript
program = {
	10: "x = 0",
	20: "x = x + 1",
	30: "print(x)",
	40: "if (x < 10) goto(20)",
	50: "end()"
};

run();
```

Commands
--------

- `run(line)` start execution of the `program` at the beginning or `line`.
- `goto(line)` move execution to the `line` specified.
- `print(string)` prints the string to the `document.body`.
- `button(text, line)` displays a button with text contents, will goto(line)
  when clicked.
- `clear()` clear the screen
- `tron()` turns the tracer on.
- `tron()` turns the tracer off.
- `end()` stop execution of the `program`.

Support
-------

Tweet @balmer or visit http://blog.davebalmer.com/introducing-gotojs-sequential-programming-for-javascript/
