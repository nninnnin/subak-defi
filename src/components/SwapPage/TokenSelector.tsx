import React from "react";
import styled from "styled-components";

const TokenSelector = () => {
  return (
    <Container>
      <Graph />

      <TokenList>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
        animi, voluptate adipisci ipsa totam doloremque quo, eius magni nostrum
        maiores consequatur amet quasi quos nisi minus ex iure laborum corporis
        recusandae eum! Impedit facilis officia omnis mollitia, dolore
        asperiores esse, rerum quas adipisci debitis minima numquam possimus
        natus qui?
      </TokenList>
    </Container>
  );
};

const Container = styled.div`
  color: black;
  padding: 1em;
`;

const Graph = styled.div`
  background-color: rgb(70, 22, 22, 0.8);

  width: 100%;
  min-height: 150px;

  border-radius: 20px;
`;

const TokenList = styled.div`
  margin-top: 1em;
`;

export default TokenSelector;
