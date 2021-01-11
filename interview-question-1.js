// const clg = require("./clg").clg;
var clg = console.log;

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

// function isInteger(x) { return parseInt(x, 10) === x; }

// clg(
// 	isInteger("1000"),
// 	isInteger(1000),
// 	isInteger(1000000000000000000000),
// 	isInteger(100.0),
// 	isInteger(100.1),
// 	isInteger(false),
// 	isInteger(Infinity),
// 	isInteger(-Infinity)
// );

// ---------------------------------

// (function () {
// 	console.log(1);
// 	setTimeout(function () {
// 		console.log(2);
// 	}, 1000);
// 	setTimeout(function () {
// 		console.log(3);
// 	}, 0);
// 	console.log(4);
// })();

// function sum(x) {
// 	if (arguments.length === 2) {
// 		return arguments[0] + arguments[1];
// 	} else {
// 		return function (y) {
// 			return x + y;
// 		};
// 	}
// }
// 柯里化
// function add(...args) {
// 	return args.reduce((a, b) => a + b, 0);
// }
// function sum() {
// 	args = Array.prototype.slice.call(arguments);
// 	return function () {
// 		const newArgs = Array.prototype.slice.call(arguments);
// 		const totalArgs = newArgs.concat(args);
// 		if (newArgs.length === 0) return add(...totalArgs);
// 		return sum(...totalArgs);
// 	};
// }

// clg(sum(2)());
// clg(sum(2, 3)()); //5
// clg(sum(2)(3)()); //5
// clg(sum(2)(3)(4)()); //9

// --------------------------------

// for (var i = 0; i < 5; i++) {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Button " + i));
// 	btn.addEventListener("click", function (i) {
// 			console.log(i);
// 	});
// 	document.body.appendChild(btn);
// }

// for (var i = 0; i < 5; i++) {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Button " + i));
// 	btn.addEventListener(
// 		"click",
// 		(function (i) {
// 			return function () {
// 				console.log(i);
// 			};
// 		})(i)
// 	);
// 	document.body.appendChild(btn);
// }

// for (let i = 0; i < 5; i++) {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Button " + i));
// 	btn.addEventListener("click", function () {
// 			console.log(i);
// 	});
// 	document.body.appendChild(btn);
// }

// ----------------------------

// var d = {};

// ["aaa", "bbb"].forEach(function (k) {
// 	d[k] = undefined;
// });
// clg( d )

// ----------------------------

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// ----------------------------

// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);
//-----------------------

// var list = readHugeList();

// var nextListItem = function() {
//     var item = list.pop();

//     if (item) {
//         // process the list item...
// 				// nextListItem();
// 				setTimeout(nextListItem, 0)
//     }
// };

// ----------------------
// var globalVar = "xyz";

// (function (outerArg) {
// 	var outerVar = "a";
// 	(function innerFunc(innerArg) {
// 		var innerVar = "b";
// 		clg(
// 			"outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar
// 		)
// 	})(456);
// })(123);

// ----------------------

// for (var i = 0; i < 5; i++) {
// 	(function(i){
// 		setTimeout(function() { console.log(i); }, i * 1000 );
// 	})(i)
// }

// ----------------------

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// ----------------------
const alert = clg;

// setTimeout(() => alert("timeout"));

// Promise.resolve().then(() => alert("promise"));

// alert("code");
// ----------------------

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();
// (function () {
//     var x, y; // outer and hoisted
//     try {
//         throw new Error();
//     } catch (x /* inner */) {
//         x = 1; // inner x, not the outer one
//         y = 2; // there is only one y, which is in the outer scope
//         console.log(x /* inner */);
//     }
//     console.log(x);
//     console.log(y);
// })();

// ----------------------

// var x = 21;
// var girl = function () {
// 	console.log(x);
// 	var x = 20;
// };
// girl();

// var x = 21;
// var girl = function () {
//     var x;
// 	console.log(x);
// 	x = 20;
// };
// girl();

// ----------------------

// for (let i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, i * 1000);
// }

// ----------------------

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// ----------------------
// let arr = [];
// arr.unshift(1);
// arr = [0, ...arr];
// ----------------------
// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a[6]);
// clg( a )
// ----------------------
// clg(typeof undefined)
// clg( typeof undefined === typeof Null )
// ----------------------
// clg( typeof 1 )
// clg( typeof typeof 1 )
// ----------------------
// var b = 1;
// function outer() {
// 	var b = 2;
// 	function inner() {
// 		b++;
// 		var b = 3;
// 		console.log(b);
// 	}
// 	inner();
// }
// outer();


// // var b = 1;
// // function outer() {
// // 	var b = 2;
// // 	function inner() {
// // 		var b;
// // 		b++;
// // 		b = 3;
// // 		console.log(b);
// // 	}
// // 	inner();
// // }
// // outer();
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
// ----------------------
