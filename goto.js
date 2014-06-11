/*
	gotojs
	======

	A delightfully evil abomination of eval() with goto(); all in global space
	by Dave Balmer.

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

	running = 1;
	line = l || 0;

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
	running = 0;
}

// dumping things to the DOM; couldn't bring myself to use document.write()
function print(s) {
	var o = document.createElement("p");
	if (s)
		o.innerHTML = s;
	else
		o.innerHTML = "&nbsp;";

	document.body.appendChild(o);
}

function print_source() {
	linenumber.forEach(function(n) {
		print('' + n + ': ' + program[n]);
	});
}

// clear the screen
function clear() {
	document.body.innerHTML = "";
}

// display a button
function button(text, l) {
	var b = document.createElement("button");
	b.innerHTML = text;
	b.setAttribute("onclick", "goto(" + l + ")");
	document.body.appendChild(b);
}

debug = 0;
running = 0;

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

	if (!running) {
		run(test);
	}
	else {
		if (line >= 0)
			line = test - 1;
		else
			line = test
	}
}

// stop execution
function end() {
	line = linenumber.length;
	running = 0;
}
