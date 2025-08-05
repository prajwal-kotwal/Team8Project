const MF = require('../models/mfModel');

async function listMFs() {
  return await MF.getAllMFs();
}

async function addMF(data) {
  return await MF.createMF(data);
}

module.exports = { listMFs, addMF };
