const SP = require('../models/stockPriceModel');

async function getStockPrices(stock_id) {
  return await SP.getPricesByStock(stock_id);
}

async function addStockPrice(data) {
  return await SP.createStockPrice(data);
}

module.exports = { getStockPrices, addStockPrice };
