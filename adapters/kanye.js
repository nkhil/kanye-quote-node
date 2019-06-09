const rp = require("request-promise");
const config = require("../config");

async function getKanyeQuote() {
  const response = await rp({
    url: `${config.quotes.kanye}`,
    method: "GET",
    resolveWithFullResponse: true
  });
  return response.body;
}

module.exports = {
  getKanyeQuote
};
