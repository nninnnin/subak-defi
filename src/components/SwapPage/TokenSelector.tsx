import React from "react";
import styled from "styled-components";
import useSWRImmutable from "swr/immutable";

import { Token } from "@/models";
import TokenItem from "./TokenItem";
import fetcher from "../../utils/fetcher";
import {
  SelectedInputTokenState,
  SelectedOutputTokenState,
} from "@/pages/_app";
import { useRecoilValue } from "recoil";

interface Props {
  selectorType: "input" | "output";
}

const TokenSelector = ({ selectorType }: Props) => {
  const { data: tokenList } = useSWRImmutable(
    "https://gateway.ipfs.io/ipns/tokens.uniswap.org",
    fetcher
  );

  const selectedToken = useRecoilValue(
    selectorType === "input"
      ? SelectedOutputTokenState
      : SelectedInputTokenState
  );

  return (
    <Container>
      <TokenList>
        {tokenList.map((token: Token) => {
          const isAlreadySelected = selectedToken?.id === token.id;

          return (
            <TokenItem
              key={token.id}
              token={token}
              selectorType={selectorType}
              disabled={isAlreadySelected}
            />
          );
        })}
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
