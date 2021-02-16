// instead of setTimeout(" ... ", 1000) use:
setTimeout(function () {}, 1000);

// instead of elt.setAttribute("onclick", "...") use:
elt.addEventListener(
	"click",
	function () {
		function hehe() {}
	},
	false
);

// 不用这个
eval("var a = [1,2,3]");
// 用这个
var a = [1, 2, 3];
