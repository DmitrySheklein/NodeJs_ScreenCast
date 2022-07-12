let i = 0;
const obj = {};
const handler = (req, res) => {
  i++;
  obj[i] = "*".repeat(100000).split("");
  res.end(`Your visit is: ${i.toString()}`);
};

module.exports = handler;
