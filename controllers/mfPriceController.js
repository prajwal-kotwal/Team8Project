const svc = require('../services/mfPriceService');

async function getMFPrices(req, res) {
  try {
    const mf_id = +req.params.mfId;
    const rows = await svc.getMFPrices(mf_id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch MF prices' });
  }
}

async function createMFPrice(req, res) {
  try {
    const { insertId } = await svc.addMFPrice(req.body);
    res.status(201).json({ price_id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create MF price' });
  }
}

module.exports = { getMFPrices, createMFPrice };
