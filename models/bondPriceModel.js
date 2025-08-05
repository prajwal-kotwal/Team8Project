const db = require('../config/db');

function getPricesByBond(bond_id) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM BondPriceHistory WHERE bond_id = ? ORDER BY date',
      [bond_id],
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      }
    );
  });
}

function createBondPrice({ bond_id, date, open_p, close_p }) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO BondPriceHistory (bond_id, date, open_p, close_p) VALUES (?,?,?,?)',
      [bond_id, date, open_p, close_p],
      (err, result) => {
        if (err) return reject(err);
        resolve({ insertId: result.insertId });
      }
    );
  });
}

module.exports = { getPricesByBond, createBondPrice };
