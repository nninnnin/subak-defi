import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { css } from "@emotion/css";

import {
  SelectedInputTokenState,
  SelectedOutputTokenState,
} from "@/pages/_app";
import SelectedToken from "./SelectedToken";

const Calculator = () => {
  const selectedInputToken = useRecoilValue(SelectedInputTokenState);
  const selectedOutputToken = useRecoilValue(SelectedOutputTokenState);

  const hasBothTokenSelected =
    selectedInputToken?.name && selectedOutputToken?.name;

  return (
    <Container>
      <div
        className={css`
          display: flex;
          align-items: center;

          & > img {
            margin: 0 8px;
          }
        `}
      >
        <SelectedToken selectedToken={selectedInputToken} />
        <img src="/money-transfer-icon.svg" width={40} />
        <SelectedToken selectedToken={selectedOutputToken} />
      </div>

      <SwapTokenButton disabled={!hasBothTokenSelected}>
        Swap Token
      </SwapTokenButton>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 600px;

  margin-top: 1em;
  border-radius: 20px;

  color: black;
  padding: 1em;

  display: flex;
  justify-content: space-between;
`;

const SwapTokenButton = styled.button`
  background-color: #fb5858;
  color: white;

  margin-left: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 700;
  white-space: nowrap;

  &:disabled {
    background-color: gainsboro;
  }
`;

export default Calculator;
