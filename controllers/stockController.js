const svc = require('../services/stockService');

async function getStocks(req, res) {
  try {
    const rows = await svc.listStocks();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stocks' });
  }
}

async function createStock(req, res) {
  try {
    const { insertId } = await svc.addStock(req.body);
    res.status(201).json({ stock_id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create stock' });
  }
}

module.exports = { getStocks, createStock };
