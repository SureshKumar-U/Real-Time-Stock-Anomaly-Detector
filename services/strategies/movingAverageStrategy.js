const recentPrices = {};

module.exports = (symbol, data, config) => {
  const { price } = data;
  if (!recentPrices[symbol]) recentPrices[symbol] = [];

  recentPrices[symbol].push(price);
  if (recentPrices[symbol].length > config.sampleSize) {
    recentPrices[symbol].shift();
  }

  const avg = recentPrices[symbol].reduce((a, b) => a + b) / recentPrices[symbol].length;
  const deviation = ((price - avg) / avg) * 100;

  if (Math.abs(deviation) > config.deviationPercent) {
    return `Deviation alert: ${deviation.toFixed(2)}% from avg`;
  }

  return null;
};
