const { getKanyeQuote } = require("../adapters/kanye");

async function handleGetKanyeQuote() {
  const payload = await getKanyeQuote();
  const result = JSON.parse(payload);
  return result;
}

module.exports = {
  handleGetKanyeQuote
};
