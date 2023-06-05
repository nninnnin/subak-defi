import React from "react";
import styled from "styled-components";
import { SWRConfig } from "swr";

import Layout from "@/components/Layout";
import TokenSelector from "@/components/SwapPage/TokenSelector";
import Calculator from "@/components/SwapPage/Calculator/Calculator";
import { Token } from "@/models";
import { addUniqueIds, filterTokens } from "@/utils";
import fetcher from "@/utils/fetcher";

const SwapPage = ({ fallback }: { fallback: { tokenList: Array<Token> } }) => {
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
  const { tokens: tokenList } = await fetcher(
    "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
  );

  return {
    props: {
      fallback: {
        "https://gateway.ipfs.io/ipns/tokens.uniswap.org": [
          ...addUniqueIds(filterTokens(tokenList)),
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

export default SwapPage;

SwapPage.getLayout = function (page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
