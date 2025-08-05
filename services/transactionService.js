const Tx = require('../models/transactionModel');

async function listTransactions() {
  return await Tx.getAllTransactions();
}

async function addTransaction(data) {
  return await Tx.createTransaction(data);
}

module.exports = { listTransactions, addTransaction };
