const clg = require("./clg").clg;

// var bar = null;
// var bar = function(){};
// var r = typeof bar === 'object'
// clg(bar);
// clg(r);

// var foo = [];

// clg(toString.call(foo) === "[object Array]");
// clg(Array.isArray(foo));

// (function () {
// 	var a = b = 3;
// }) ()
// -----------------------
// (function () {
// 	b = 3;
// 	var a = b;
// })();

// clg("typeof a", typeof a);
// clg("typeof b", typeof b);

// ----------------------------

// var myObject = {
// 	foo: "bar",
// 	func: function () {
// 		var self = this;
// 		clg("outer func: this.foo= ", this.foo);
// 		clg(
// 			"outer func: self.foo= ",
// 			self.foo
// 		);

// 		((function () {
// 			clg('this', this === global) // true
// 			clg("outer func: this.foo= ", this.foo);
// 			clg("outer func: self.foo= ", self.foo);
// 		}()));
// 	},
// };
// myObject.func();

// ----------------------------

// function foo() {
// 	return { bar: "hello" };
// }

// function foo2() {
// 	return
// 	{
// 		bar: "hello";
// 	}
// }
// clg(foo());
// clg(foo2());

// clg(typeof NaN === 'number')
// clg( NaN === NaN )
// clg( Number.isNaN( NaN) )

// clg(0.1 + 0.2);

// clg( Number.EPSILON)

// es6
// clg(Number.isInteger(100));

// function isInteger(x) {
// 	return (x ^ 0) === x;
// }
// function isInteger(x){
// 	return (typeof x === 'number') && (x % 1 === 0);
// }

// function isInteger(x) {
// 	return Math.round(x) === x;
// }

function isInteger(x) { return parseInt(x, 10) === x; }

clg(
	isInteger("1000"),
	isInteger(1000),
	isInteger(1000000000000000000000),
	isInteger(100.0),
	isInteger(100.1),
	isInteger(false),
	isInteger(Infinity),
	isInteger(-Infinity)
);
