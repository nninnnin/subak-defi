import React from "react";
import styled from "styled-components";

import { Token } from "@/models";

const TokenItem = ({ token }: { token: Token }) => {
  return (
    <Container>
      <Logo src={token.logoURI} width={24} height={24} />
      <Name>{token.name}</Name>
    </Container>
  );
};

export const Container = styled.div`
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
`;

export const Logo = styled.img`
  margin-right: 1em;
  border-radius: 50%;

  background-color: #fff;
  border: 2px solid gainsboro;
`;

export const Name = styled.div``;

export default TokenItem;
