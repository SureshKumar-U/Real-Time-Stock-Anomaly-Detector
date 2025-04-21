const EventEmitter = require('events');
const stockEmitter = new EventEmitter();

const stockSymbols = ["AAPL", "TSLA"];
const prices = { AAPL: 100, TSLA: 200 };

function generatePrice(oldPrice) {
  const volatility = 0.03;
  return +(oldPrice * (1 + (Math.random() * 2 - 1) * volatility)).toFixed(2);
}

function startSimulation() {
  setInterval(() => {
    stockSymbols.forEach(symbol => {
      const newPrice = generatePrice(prices[symbol]);
      prices[symbol] = newPrice;

      stockEmitter.emit('priceUpdate', {
        symbol,
        price: newPrice,
        timestamp: Date.now()
      });
    });
  }, 1000);
}

module.exports = { stockEmitter, startSimulation };
