const binance = require("./exchanges/binance/binance-client");
const bitfinex = require("./exchanges/bitfinex/bitfinex-client");
const bitflyer = require("./exchanges/bitflyer/bitflyer-client");
const bitmex = require("./exchanges/bitmex/bitmex-client");
const bitstamp = require("./exchanges/bitstamp/bitstamp-client");
const bittrex = require("./exchanges/bittrex/bittrex-client");
const gdax = require("./exchanges/gdax/gdax-client");
const gemini = require("./exchanges/gemini/gemini-client");
const hitbtc = require("./exchanges/hitbtc/hitbtc-client");
const huobi = require("./exchanges/huobi/huobi-client");
const okex = require("./exchanges/okex/okex-client");
const poloniex = require("./exchanges/poloniex/poloniex-client");

module.exports = {
  Binance: binance,
  Bitfinex: bitfinex,
  Bitflyer: bitflyer,
  BitMEX: bitmex,
  Bitstamp: bitstamp,
  Bittrex: bittrex,
  GDAX: gdax,
  Gemini: gemini,
  HitBTC: hitbtc,
  Huobi: huobi,
  OKEx: okex,
  Poloniex: poloniex,

  binance,
  bitfinex,
  bitflyer,
  bitmex,
  bitstamp,
  bittrex,
  gdax,
  gemini,
  hitbtc,
  huobi,
  okex,
  poloniex,
};
