const db = require('../config/db');

function getAllTransactions() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM `Transaction` ORDER BY tx_datetime DESC', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function createTransaction(tx) {
  const {
    tx_type, asset_type, stock_id, mf_id, bond_id,
    quantity, price_per_unit
  } = tx;
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO \`Transaction\`
       (tx_type, asset_type, stock_id, mf_id, bond_id, quantity, price_per_unit)
       VALUES (?,?,?,?,?,?,?)`,
      [tx_type, asset_type, stock_id, mf_id, bond_id, quantity, price_per_unit],
      (err, result) => {
        if (err) return reject(err);
        resolve({ insertId: result.insertId });
      }
    );
  });
}

module.exports = { getAllTransactions, createTransaction };
