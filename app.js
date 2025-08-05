require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const stockRoutes       = require('./routes/stockRoutes');
const mfRoutes          = require('./routes/mfRoutes');
const bondRoutes        = require('./routes/bondRoutes');
const stockPriceRoutes  = require('./routes/stockPriceRoutes');
const mfPriceRoutes     = require('./routes/mfPriceRoutes');
const bondPriceRoutes   = require('./routes/bondPriceRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(cors());
app.use(express.json());

console.log('stockRoutes:',   typeof require('./routes/stockRoutes'));
console.log('mfRoutes:',      typeof require('./routes/mfRoutes'));
console.log('bondRoutes:',    typeof require('./routes/bondRoutes'));
console.log('stockPriceRoutes:', typeof require('./routes/stockPriceRoutes'));
console.log('mfPriceRoutes:',    typeof require('./routes/mfPriceRoutes'));
console.log('bondPriceRoutes:',  typeof require('./routes/bondPriceRoutes'));
console.log('transactionRoutes:', typeof require('./routes/transactionRoutes'));


app.use('/stocks',       stockRoutes);
app.use('/mutualfunds',  mfRoutes);
app.use('/bonds',        bondRoutes);
app.use('/stock-prices', stockPriceRoutes);
app.use('/mf-prices',    mfPriceRoutes);
app.use('/bond-prices',  bondPriceRoutes);
app.use('/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
