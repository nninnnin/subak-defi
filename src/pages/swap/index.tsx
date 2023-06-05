import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { SWRConfig } from "swr";

import TokenSelector from "@/components/SwapPage/TokenSelector";
import Calculator from "@/components/SwapPage/Calculator/Calculator";
import { Token } from "@/models";

const Swap = ({ fallback }: { fallback: { tokenList: Array<Token> } }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Container>
        <TokenSelectors>
          <TokenSelector selectorType="input" />
          <TokenSelector selectorType="output" />
        </TokenSelectors>

        <Calculator />
      </Container>
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://gateway.ipfs.io/ipns/tokens.uniswap.org");

  const {
    tokens: tokenList,
  }: {
    tokens: Array<Token>;
  } = await res.json();

  const allowedTokens = ["USDC", "USDT", "WBTC", "DAI", "WETH"];

  return {
    props: {
      fallback: {
        "https://gateway.ipfs.io/ipns/tokens.uniswap.org": [
          ...tokenList
            .filter(
              (token) =>
                allowedTokens.includes(token.symbol) && token.chainId === 1
            )
            .map((token) => ({ id: uuid(), ...token })),
        ],
      },
    },
  };
}

const Container = styled.div`
  position: fixed;
  top: calc(50% + 20px);
  left: 50%;
  transform: translate(-50%, -50%);
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
