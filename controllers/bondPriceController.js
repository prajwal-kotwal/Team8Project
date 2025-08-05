const svc = require('../services/bondPriceService');

async function getBondPrices(req, res) {
  try {
    const bond_id = +req.params.bondId;
    const rows = await svc.getBondPrices(bond_id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bond prices' });
  }
}

async function createBondPrice(req, res) {
  try {
    const { insertId } = await svc.addBondPrice(req.body);
    res.status(201).json({ price_id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create bond price' });
  }
}

module.exports = { getBondPrices, createBondPrice };
