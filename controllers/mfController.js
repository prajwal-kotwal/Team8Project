const svc = require('../services/mfService');

async function getMFs(req, res) {
  try {
    const rows = await svc.listMFs();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch mutual funds' });
  }
}

async function createMF(req, res) {
  try {
    const { insertId } = await svc.addMF(req.body);
    res.status(201).json({ mf_id: insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create mutual fund' });
  }
}

module.exports = { getMFs, createMF };
