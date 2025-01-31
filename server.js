const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Define Transaction Schema
const TransactionSchema = new mongoose.Schema({
    amount: Number,
    desc: String,
    type: String,
    date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

//  Create Transaction (POST)
app.post('/api/transactions', async (req, res) => {
    try {
        const { amount, desc, type } = req.body;
        const newTransaction = new Transaction({ amount, desc, type });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});

//  Get Transactions (GET)
app.get('/api/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});

//  Update Transaction (PUT)
app.put('/api/transactions/:id', async (req, res) => {
    try {
        const { amount, desc, type } = req.body;
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            { amount, desc, type },
            { new: true }
        );
        res.status(200).json(updatedTransaction);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});

// Delete Transaction (DELETE)
app.delete('/api/transactions/:id', async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Transaction Deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
