const log = require("logger")(module);
const db = require("db");

function User(name) {
  this.name = name;
}

User.prototype.hello = who => {
  log(`Hello, ${who.name} you are not ${db.getPhrase("hello")}`);
};

module.exports = User;
// global.User = User;
