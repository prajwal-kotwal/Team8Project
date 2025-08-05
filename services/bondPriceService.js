const BP = require('../models/bondPriceModel');

async function getBondPrices(bond_id) {
  return await BP.getPricesByBond(bond_id);
}

async function addBondPrice(data) {
  return await BP.createBondPrice(data);
}

module.exports = { getBondPrices, addBondPrice };
