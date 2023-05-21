import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Token } from "@/models";
import TokenItem from "./TokenItem";

const TokenSelector = () => {
  const [tokenList, setTokenList] = useState<Array<Token>>([]);
  const [selectedTokens, setSelectedTokens] = useState({
    wallet: "",
    pool: "",
  });

  useEffect(() => {
    (async function () {
      const res = await fetch(
        "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
      );

      const {
        tokens: tokenList,
      }: {
        tokens: Array<Token>;
      } = await res.json();

      setTokenList(tokenList);
    })();
  }, []);

  return (
    <Container>
      <TokenList>
        {tokenList.map((token) => (
          <TokenItem key={token.address} token={token} />
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
