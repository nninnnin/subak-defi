"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <Container>
      <Title>Watermelon Swap</Title>

      <NavList>
        <Link href="/swap">Swap</Link>
        <Link href="/pools">Pools</Link>
        <Link href="/mortgages">Mortgages</Link>
      </NavList>

      <Profile>
        <ProfileImage />
        <Address>0xda...6873</Address>
      </Profile>
    </Container>
  );
};

const Container = styled.div`
  background-color: #461616;
  color: white;

  padding: 24px;

  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    cursor: pointer;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;

  & > a {
    margin-right: 32px;
  }
`;

export const Title = styled.div``;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 30px;
  height: 30px;

  background-color: blue;
  border: 2px solid white;
  border-radius: 50%;

  margin-right: 10px;
`;

export const Address = styled.div``;

export default NavigationBar;
