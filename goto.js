/*
	gotojs
	======

	A delightfully evil abomination of eval() and goto(); all in global space
	by @balmer.

	See the README.md for more info.
*/

// start execution
function run(l) {
	linenumber = [];

	// object properties are not returned in order
	for (var k in program)
		linenumber.push(k * 1);

	// so we sort them out
	linenumber = linenumber.sort(function(a, b) {
		if (a > b)
			return 1;
		else if (a < b)
			return -1;
		else
			return 0;
	});

	// prevent runaway scripts
	var max = 0;

	line = -1;
	if (l)
		goto(l);
	else
		line = 0;

	// execution engine, powered by globals and eval()
	for (; line < linenumber.length; line++) {
		if (debug)
			console.log(linenumber[line] + " " + program[linenumber[line]]);

		// no more than 10000 lines executed; who needs more than that, really?
		if (++max > 10000)
			return;

		// eval() is eval
		eval(program[linenumber[line]]);
	}
}

// dumping things to the DOM; couldn't bring myself to use document.write()
function print(s) {
	var o = document.createElement("p");
	o.innerHTML = s;
	document.body.appendChild(o);
}

debug = 0;

// turn debugging on
function tron() {
	debug = true;
}

// turn it off
function troff() {
	debug = false;
}

// move execution to another line number
function goto(l) {
	var test = linenumber.indexOf(l);

	if (test >= 0)
		line = (line >= 0) ? test - 1 : test;
}

// stop execution
function end() {
	line = linenumber.length;
}

