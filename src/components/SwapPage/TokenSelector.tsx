import React from "react";
import styled from "styled-components";
import useSWRImmutable from "swr/immutable";

import { Token } from "@/models";
import TokenItem from "./TokenItem";
import fetcher from "../../utils/fetcher";

interface Props {
  selectorType: "input" | "output";
}

const TokenSelector = ({ selectorType }: Props) => {
  const { data: tokenList } = useSWRImmutable(
    "https://gateway.ipfs.io/ipns/tokens.uniswap.org",
    fetcher
  );

  return (
    <Container>
      <TokenList>
        {tokenList.map((token: Token) => (
          <TokenItem key={token.id} token={token} selectorType={selectorType} />
        ))}
      </TokenList>
    </Container>
  );
};

const Container = styled.div`
  color: black;
  padding: 1em;
`;

const TokenList = styled.div`
  max-height: 200px;
  overflow: auto;
`;

export default TokenSelector;
