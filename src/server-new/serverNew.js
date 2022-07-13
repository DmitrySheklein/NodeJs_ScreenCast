const http = require("node:http");
const handler = require("./handler");
const handler2 = require("./file");
const server = new http.Server();

server.on("request", handler2);
server.listen(3005);
console.log("start server");
