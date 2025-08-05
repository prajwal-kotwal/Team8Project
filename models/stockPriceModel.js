const db = require('../config/db');

function getPricesByStock(stock_id) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM StockPriceHistory WHERE stock_id = ? ORDER BY date',
      [stock_id],
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      }
    );
  });
}

function createStockPrice({ stock_id, date, open_p, close_p }) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO StockPriceHistory (stock_id, date, open_p, close_p) VALUES (?,?,?,?)',
      [stock_id, date, open_p, close_p],
      (err, result) => {
        if (err) return reject(err);
        resolve({ insertId: result.insertId });
      }
    );
  });
}

function getLatestStockPrice(stock_id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT close_p
           FROM StockPriceHistory
          WHERE stock_id = ?
          ORDER BY date DESC
          LIMIT 1`,
        [stock_id],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows[0]?.close_p ?? null);
        }
      );
    });
  }
  

module.exports = { getPricesByStock, createStockPrice, getLatestStockPrice };
