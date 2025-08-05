const svc = require('../services/transactionService');

async function getTransactions(req, res) {
  try {
    const rows = await svc.listTransactions();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
}

async function createTransaction(req, res) {
  try {
    const { insertId } = await svc.addTransaction(req.body);
    res.status(201).json({ tx_id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
}

module.exports = { getTransactions, createTransaction };
