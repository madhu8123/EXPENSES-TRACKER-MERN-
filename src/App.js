import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";  // Importing CSS

function App() {
    const [transactions, setTransactions] = useState([]);
    const [form, setForm] = useState({ amount: "", desc: "", type: "EXPENSE" });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/transactions")
            .then(res => setTransactions(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await axios.put(`http://localhost:5000/api/transactions/${editId}`, form);
            setEditId(null);
        } else {
            await axios.post("http://localhost:5000/api/transactions", form);
        }
        setForm({ amount: "", desc: "", type: "EXPENSE" });
        refreshTransactions();
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/transactions/${id}`);
        refreshTransactions();
    };

    const handleEdit = (transaction) => {
        setEditId(transaction._id);
        setForm({ amount: transaction.amount, desc: transaction.desc, type: transaction.type });
    };

    const refreshTransactions = async () => {
        const res = await axios.get("http://localhost:5000/api/transactions");
        setTransactions(res.data);
    };

    return (
        <div>
            <h2>Expense Tracker</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Amount" value={form.amount} 
                    onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
                <input type="text" placeholder="Description" value={form.desc} 
                    onChange={(e) => setForm({ ...form, desc: e.target.value })} required />
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                    <option value="EXPENSE">Expense</option>
                    <option value="INCOME">Income</option>
                </select>
                <button type="submit">{editId ? "Update" : "Add"}</button>
            </form>

            <h3>Transactions</h3>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction._id}>
                        {transaction.amount} - {transaction.desc} ({transaction.type})
                        <button className="edit-btn" onClick={() => handleEdit(transaction)}>✏ Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete(transaction._id)}>❌ Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;



