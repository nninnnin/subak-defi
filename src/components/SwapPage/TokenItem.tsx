import React from "react";
import styled from "styled-components";

import { Token } from "@/models";
import { useRecoilState } from "recoil";
import {
  SelectedInputTokenState,
  SelectedOutputTokenState,
} from "@/pages/_app";

const TokenItem = ({
  token,
  selectorType,
}: {
  token: Token;
  selectorType: "input" | "output";
}) => {
  const [selectedToken, setSelectedToken] = useRecoilState(
    selectorType === "input"
      ? SelectedInputTokenState
      : SelectedOutputTokenState
  );

  const handleTokenItemClick = (token: Token) => () => {
    setSelectedToken(token);
  };

  const isSelected = selectedToken?.id === token.id;

  console.log(selectedToken);
  console.log(token);

  return (
    <Container onClick={handleTokenItemClick(token)} selected={isSelected}>
      <Logo src={token.logoURI} width={24} height={24} />
      <Name>{token.name}</Name>
    </Container>
  );
};

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;

  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 16px;

  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #ff9e9e;
  }

  ${({ selected }) =>
    selected
      ? `
      color: white;
      background-color: #ff9e9e;
  `
      : ""};
`;

export const Logo = styled.img`
  margin-right: 1em;
  border-radius: 50%;

  background-color: #fff;
  border: 2px solid gainsboro;
`;

export const Name = styled.div``;

export default TokenItem;
