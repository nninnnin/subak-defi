import React from "react";
import styled from "styled-components";

const Calculator = () => {
  return (
    <Container>
      <Wallet>wallet</Wallet>
      <Pool>pool</Pool>
    </Container>
  );
};

export const Container = styled.div`
  background-color: #fff;
  width: 600px;

  margin-top: 1em;
  border-radius: 20px;

  color: black;
  padding: 1em;

  display: flex;
`;

export const Wallet = styled.div`
  background-color: blanchedalmond;
  flex: 1;
`;

export const Pool = styled.div`
  background-color: cyan;
  flex: 1;

  text-align: right;
`;

export default Calculator;
