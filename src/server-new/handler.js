let i = 0;

const handler = (req, res) => {
  i++;
  res.end(i.toString());
};

module.exports = handler;
