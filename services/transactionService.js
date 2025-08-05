// services/transactionService.js
const Tx      = require('../models/transactionModel');
const stockPH = require('../models/stockPriceModel');
const mfPH    = require('../models/mfPriceModel');
const bondPH  = require('../models/bondPriceModel');

async function listTransactions() {
  return await Tx.getAllTransactions();
}

async function addTransaction(tx) {
  // Auto‐fill price_per_unit from latest price history if not provided
  if (tx.price_per_unit == null) {
    if (tx.asset_type === 'stock') {
      tx.price_per_unit = await stockPH.getLatestStockPrice(tx.stock_id);
    } else if (tx.asset_type === 'mutualfund') {
      tx.price_per_unit = await mfPH.getLatestMFPrice(tx.mf_id);
    } else if (tx.asset_type === 'bond') {
      tx.price_per_unit = await bondPH.getLatestBondPrice(tx.bond_id);
    }
    if (tx.price_per_unit == null) {
      throw new Error('No price history available to auto-fill transaction price');
    }
  }

  return await Tx.createTransaction(tx);
}

module.exports = { listTransactions, addTransaction };
