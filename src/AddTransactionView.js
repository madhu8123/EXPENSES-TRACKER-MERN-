import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #e6e8e9;
  border-radius: 5px;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const AddButton = styled.button`
  background: #0d1d2c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const AddTransactionView = ({ addTransaction, toggleAddTxn }) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  const handleAddTransaction = () => {
    if (!amount || !desc) return;

    addTransaction({
      id: Date.now(),
      amount: Number(amount),
      desc,
      type,
    });

    toggleAddTxn(false);
  };

  return (
    <Container>
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioContainer>
        <label>
          <input
            type="radio"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />
          Income
        </label>
      </RadioContainer>
      <AddButton onClick={handleAddTransaction}>Add Transaction</AddButton>
    </Container>
  );
};

export default AddTransactionView;
