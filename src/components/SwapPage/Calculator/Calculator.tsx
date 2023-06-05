import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { css } from "@emotion/css";

import {
  SelectedInputTokenState,
  SelectedOutputTokenState,
} from "@/pages/_app";
import SelectedToken from "./SelectedToken";
import Container from "@/components/common/CalculatorContainer";

const Calculator = () => {
  const selectedInputToken = useRecoilValue(SelectedInputTokenState);
  const selectedOutputToken = useRecoilValue(SelectedOutputTokenState);

  const hasBothTokenSelected =
    selectedInputToken?.name && selectedOutputToken?.name;

  return (
    <Container>
      <div
        className={css`
          width: 100%;

          display: flex;
          align-items: center;

          & > img {
            margin: 0 8px;
          }

          & > div {
            flex: 1;
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

const SelectedTokenContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  & > img {
    margin: 0 8px;
  }

  & > div {
    flex: 1;
  }
`;

export default Calculator;
