import React from "react";
import styled from "styled-components";

import Layout from "@/components/Layout";

const Mortgage = () => {
  return <Container>Mortgages</Container>;
};

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;

  color: #461616;
  font-size: 10em;
  font-weight: bold;
`;

export default Mortgage;

Mortgage.getLayout = function (page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
