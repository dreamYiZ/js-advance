const clg = require("./clg").clg;

function init() {
	var name = "Rentoo";
	function displayName() {
		clg(name);
	}
	displayName();
}

init();



function makeFunc() {
	var name = "Rentoo";
	function displayName() {
		clg(name);
	}
	return displayName;
}

var myFunc = makeFunc();
clg('myFunc is ready')
myFunc();
