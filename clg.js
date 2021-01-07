let idx = 0
const clg = (...args) => {
  args.forEach((x) => console.log(`${idx++}:`,x));
};

module.exports = {
  clg,
};
