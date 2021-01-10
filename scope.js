const clg = require("./clg").clg;

// let a = 0;

// for (var b = 0; ; ) {
// 	break;
// }

// clg( 'b:',b )

// 我是一个块语句
{
}

// // 我是一个块语句
// hehe: {
// 	var hehe = "rentoo";
// 	clg("hehe:", hehe);
// }

// clg("out:", hehe);

// + function hehe1() {
// 	+ function hehe2() {
// 		+ function hehe3() {
// 			+ function hehe4() {
// 				+ function hehe5() {
// 					+ function hehe6() {
// 						var hehe = "hehe";
// 					} ()
// clg("hehe", hehe);

// 				} ()
// 			} ()
// 		} ()
// 	} ()

// }()

// function heheFunc() {
// 	var hehe = "Rentoo";
// }
// heheFunc();
// clg("hehe", hehe);

function hehe(a) {
	clg("a1:", a);

	if (true) {
		a = "aaaaaaa";
	}
	clg("a2:", a);
}
hehe(3);
