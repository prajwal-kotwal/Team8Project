const db = require('../config/db');

function getAllMFs() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM MutualFund', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function createMF({ symbol, name }) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO MutualFund (symbol, name) VALUES (?,?)',
      [symbol, name],
      (err, result) => {
        if (err) return reject(err);
        resolve({ insertId: result.insertId });
      }
    );
  });
}

module.exports = { getAllMFs, createMF };
