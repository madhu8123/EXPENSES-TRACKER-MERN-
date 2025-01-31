import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
`;


const HomeComponent = () => {
  const navigate = useNavigate();

  

  return (
    <Container>
      <Card>
        <h2>Welcome to Expense Tracker</h2>
       
        
      </Card>
    </Container>
  );
};

export default HomeComponent;
