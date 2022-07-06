const util = require("util");

const obj = {
  a: 1,
  b: 2,
  ins() {
    return 143;
  },
};

obj.self = obj;
// console.log(obj);
// console.log(util.inspect(obj));

const str = util.format("My %s,%d,%j", "string", 123, {
  test: "obj",
  a: 1,
});
// console.log(str);
console.log("My %s,\nsecond: %d,\nthird: %j", "string", 123, {
  test: "obj",
  a: 1,
});
