const priceHistory = {};

module.exports = (symbol, data, config) => {
  const { timestamp, price } = data;
  const window = config.windowSec * 1000;
  if (!priceHistory[symbol]) priceHistory[symbol] = [];

  priceHistory[symbol].push({ timestamp, price });

  priceHistory[symbol] = priceHistory[symbol].filter(p => timestamp - p.timestamp <= window);

  const oldPrice = priceHistory[symbol][0].price;
  const percentChange = ((price - oldPrice) / oldPrice) * 100;

  if (Math.abs(percentChange) > config.thresholdPercent) {
    return `Spike alert: ${percentChange.toFixed(2)}% change`;
  }

  return null;
};
