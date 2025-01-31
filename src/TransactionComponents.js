import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #e6e8e9;
  }

  th {
    font-size: 16px;
    color: #6c757d;
  }

  td {
    font-size: 14px;
  }
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.isEdit ? "#28a745" : "#dc3545")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const TransactionComponents = ({
  transactions,
  deleteTransaction,
  updateTransaction,
}) => {

  const handleEdit = (txn) => {
    const newDesc = prompt("Update Description", txn.desc);
    const newAmount = parseFloat(prompt("Update Amount", txn.amount));

    if (newDesc && !isNaN(newAmount)) {
      updateTransaction(txn.id, {
        ...txn,
        desc: newDesc,
        amount: newAmount,
      });
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.desc}</td>
              <td>${txn.amount}</td>
              <td
                style={{
                  color: txn.type === "EXPENSE" ? "red" : "green",
                  fontWeight: "bold",
                }}
              >
                {txn.type}
              </td>
              <td>
                <ActionButton isEdit onClick={() => handleEdit(txn)}>
                  Edit
                </ActionButton>
                <ActionButton onClick={() => deleteTransaction(txn.id)}>
                  Delete
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TransactionComponents;
