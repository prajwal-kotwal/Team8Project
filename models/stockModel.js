const db = require('../config/db');

function getAllStocks() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Stock', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function createStock({ symbol, name }) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO Stock (symbol, name) VALUES (?,?)',
      [symbol, name],
      (err, result) => {
        if (err) return reject(err);
        resolve({ insertId: result.insertId });
      }
    );
  });
}

module.exports = { getAllStocks, createStock };
