const MP = require('../models/mfPriceModel');

async function getMFPrices(mf_id) {
  return await MP.getPricesByMF(mf_id);
}

async function addMFPrice(data) {
  return await MP.createMFPrice(data);
}

module.exports = { getMFPrices, addMFPrice };
