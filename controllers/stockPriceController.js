const svc = require('../services/stockPriceService');

async function getStockPrices(req, res) {
  try {
    const stock_id = +req.params.stockId;
    const rows = await svc.getStockPrices(stock_id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stock prices' });
  }
}

async function createStockPrice(req, res) {
  try {
    const { insertId } = await svc.addStockPrice(req.body);
    res.status(201).json({ price_id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create stock price' });
  }
}

module.exports = { getStockPrices, createStockPrice };
