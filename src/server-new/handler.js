const url = require("node:url");
let i = 0;
const obj = {};
// const handler = (req, res) => {
//   i++;
//   obj[i] = "*".repeat(100000).split("");
//   res.end(`Your visit is: ${i.toString()}`);
// };
const handler = (req, res) => {
  const urlParsed = url.parse(req.url, true);
  const pathname = urlParsed.pathname;
  const messsage = urlParsed.query.message;

  if (pathname === "/echo" && messsage) {
    res.end(`Message your: ${messsage} ${JSON.stringify(urlParsed.query)}`);
  } else {
    res.statusCode = 404;
    res.end(`No page`);
  }
};
module.exports = handler;
