gotojs
======

A delightfully evil abomination of eval() with goto(); all in global space
by Dave Balmer.

Use
---

```language-javascript
program = {
	10: "x = 0",
	20: "x = x + 1",
	30: "print(x)",
	40: "if (x < 10) goto(10)",
	50: "end()"
};

run();
```

Commands
--------

- `run(line)` start execution of the `program` at the beginning or `line`.
- `goto(line)` move execution to the `line` specified.
- `print(string)` prints the string to the `document.body`.
- `tron()` turns the tracer on.
- `tron()` turns the tracer off.
- `end()` stop execution of the `program`.

Support
-------

Tweet @balmer or visit http://blog.davebalmer/com/gotojs
