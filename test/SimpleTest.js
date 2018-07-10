const ccew = require("../src/index");
const hitbtc = new ccew.HitBTC();

hitbtc.on("ticker", ticker => console.log(ticker));
hitbtc.subscribeTickers({
  id: "ETHBTC",
  base: "ETH",
  quote: "BTC",
});
