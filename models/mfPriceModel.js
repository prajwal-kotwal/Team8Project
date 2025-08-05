const db = require('../config/db');

function getPricesByMF(mf_id) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM MFPriceHistory WHERE mf_id = ? ORDER BY date',
      [mf_id],
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      }
    );
  });
}

function createMFPrice({ mf_id, date, open_p, close_p }) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO MFPriceHistory (mf_id, date, open_p, close_p) VALUES (?,?,?,?)',
      [mf_id, date, open_p, close_p],
      (err, result) => {
        if (err) return reject(err);
        resolve({ insertId: result.insertId });
      }
    );
  });
}

function getLatestMFPrice(mf_id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT close_p
           FROM MFPriceHistory
          WHERE mf_id = ?
          ORDER BY date DESC
          LIMIT 1`,
        [mf_id],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows[0]?.close_p ?? null);
        }
      );
    });
  }

module.exports = { getPricesByMF, createMFPrice, getLatestMFPrice };
