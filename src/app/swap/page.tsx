"use client";

import React from "react";
import styled from "styled-components";

import TokenSelector from "@/components/SwapPage/TokenSelector";
import Calculator from "@/components/SwapPage/Calculator";

const Swap = () => {
  return (
    <Container>
      <TokenSelectors>
        <TokenSelector />
        <TokenSelector />
      </TokenSelectors>

      <Calculator />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: red;
`;

const TokenSelectors = styled.div`
  display: flex;
  width: 600px;

  & > div {
    flex: 1;
    background-color: #fff;
    border-radius: 20px;
  }

  & > div:first-child {
    margin-right: 10px;
  }

  & > div:last-child {
    margin-left: 10px;
  }
`;

export default Swap;
