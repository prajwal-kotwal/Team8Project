const db = require('../config/db');

function getAllBonds() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Bond', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function createBond({ name, issuer, maturity_date }) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO Bond (name, issuer, maturity_date) VALUES (?,?,?)',
      [name, issuer, maturity_date],
      (err, result) => {
        if (err) return reject(err);
        resolve({ insertId: result.insertId });
      }
    );
  });
}

module.exports = { getAllBonds, createBond };
