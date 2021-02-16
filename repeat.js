function repeat(x, n) {
	if (typeof x === "string" && x.length === 1) {
		if (n--) {
			return x + arguments.callee(x, n);
		} else {
			return "";
		}
	}
	return "";
}

module.exports = repeat;
