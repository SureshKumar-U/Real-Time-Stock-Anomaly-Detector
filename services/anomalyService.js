const config = require('../config/strategyConfig.json');
const alertModel = require('../models/alertModel');
const spike = require('./strategies/spikeStrategy');
const movingAverage = require('./strategies/movingAverageStrategy');

const strategies = {
  spike,
  movingAverage
};

function handlePriceUpdate(data) {
  const symbol = data.symbol;
  const stockConfig = config[symbol];
  if (!stockConfig) return;

  const strategy = strategies[stockConfig.strategy];
  if (!strategy) return;

  const reason = strategy(symbol, data, stockConfig);
  if (reason) {
    const alert = {
      symbol,
      timestamp: new Date().toISOString(),
      reason
    };
    alertModel.addAlert(alert);
    console.log(`[ALERT] ${symbol} - ${reason}`);
  }
}

module.exports = { handlePriceUpdate };
