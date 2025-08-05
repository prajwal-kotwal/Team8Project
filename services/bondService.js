const Bond = require('../models/bondModel');

async function listBonds() {
  return await Bond.getAllBonds();
}

async function addBond(data) {
  return await Bond.createBond(data);
}

module.exports = { listBonds, addBond };
