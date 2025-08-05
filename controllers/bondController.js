const svc = require('../services/bondService');

async function getBonds(req, res) {
  try {
    const rows = await svc.listBonds();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bonds' });
  }
}

async function createBond(req, res) {
  try {
    const { insertId } = await svc.addBond(req.body);
    res.status(201).json({ bond_id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create bond' });
  }
}

module.exports = { getBonds, createBond };
