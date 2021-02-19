console.log("main start");

var promiseFn = new Promise((resolve) => {
	console.log("promise");

	setTimeout(() => {
		console.log("timeout in promise");
		resolve("promiseFn");
	}, 2000);
});

promiseFn.then(() => {
	console.log("promise then");
});

setTimeout(() => {
	console.log("timeout");
}, 1000);

console.log("main end");





setTimeout((_) => console.log(4));

new Promise((resolve) => {
	resolve();
	console.log(1);
}).then((_) => {
	console.log(3);
});

console.log(2);







console.log("script start");

setTimeout(function () {
	console.log("setTimeout");
}, 0);

Promise.resolve()
	.then(function () {
		console.log("promise1");
	})
	.then(function () {
		console.log("promise2");
	});

console.log("script end");
