import React, { useState } from "react";
import styled from "styled-components";
import AddTransactionView from "./AddTransactionView";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;


const SummaryBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const SummaryCard = styled.div`
  flex: 1;
  background-color: ${(props) => (props.isIncome ? "#d4edda" : "#f8d7da")};
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.isIncome ? "#155724" : "#721c24")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddTransactionButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);

  return (
    <Container>
      {/* <BalanceBox isNegative={income - expense < 0}>
        <span>Balance: ${income - expense}</span>
        <AddTransactionButton onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "Add Transaction"}
        </AddTransactionButton>
      </BalanceBox> */}
      {isAddTxnVisible && (
        <AddTransactionView
          addTransaction={addTransaction}
          toggleAddTxn={toggleAddTxn}
        />
      )}
      <SummaryBox>
        <SummaryCard>
          Expense: <span>${expense}</span>
        </SummaryCard>
        <SummaryCard isIncome>
          Income: <span>${income}</span>
        </SummaryCard>
      </SummaryBox>
    </Container>
  );
};

export default OverViewComponent;
