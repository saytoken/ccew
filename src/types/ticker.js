/**
 * 行情数据
 */
class Ticker {
  constructor({ exchange, base, quote, symbol, baseVolume, quoteVolume, ask, average, bid, change, close, first, high, low, info, last, open, percentage, datetime, timestamp, vwap  }) {
    this.exchange = exchange;
    this.ask = ask;
    this.base = base;
    this.quote = quote;
    this.average = average;
    this.baseVolume = baseVolume;
    this.bid = bid;
    this.change = change;
    this.close = close;
    this.datetime = datetime;
    this.first = first;
    this.high = high;
    this.info = info;
    this.last = last;
    this.low = low;
    this.open = open;
    this.percentage = percentage;
    this.quoteVolume = quoteVolume;
    this.symbol = symbol;
    this.timestamp = timestamp;
    this.vwap = vwap;
  }

  get marketId() {
    return `${this.base}/${this.quote}`;
  }

  get fullId() {
    return `${this.exchange}:${this.base}/${this.quote}`;
  }
}

module.exports = Ticker;
