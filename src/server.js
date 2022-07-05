const log = require("logger")(module);
const db = require("db");
db.connect();

const User = require("./user");

function run() {
  const vasya = new User("Вася");
  const petya = new User("Петя");

  vasya.hello(petya);

  log(db.getPhrase("Run successfull"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}

const name = require("./test")("hehe");
log(name);
