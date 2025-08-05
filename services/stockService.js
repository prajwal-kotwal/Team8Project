const Stock = require('../models/stockModel');

async function listStocks() {
  return await Stock.getAllStocks();
}

async function addStock(data) {
  return await Stock.createStock(data);
}

module.exports = { listStocks, addStock };
