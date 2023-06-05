import styled from "styled-components";
import Link from "next/link";
import { useAccount, useConnect } from "wagmi";
import { css } from "@emotion/css";
import { InjectedConnector } from "@wagmi/core";
import { formatAddress } from "../utils";

const NavigationBar = () => {
  const { address, isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const handleLoginButtonClick = () => {
    connect();
  };

  return (
    <Container>
      <Title role="heading">Watermelon Swap</Title>

      <NavList>
        <Link href="/swap">Swap</Link>
        <Link href="/supply">Supply</Link>
        <Link href="/borrow">Borrow</Link>
        <Link href="/dashboard">Dashboard</Link>
      </NavList>

      <Profile>
        {isConnected ? (
          <>
            <ProfileImage />
            <Address>{formatAddress(address!)}</Address>
          </>
        ) : (
          <button
            className={css`
              padding: 6px 12px;
            `}
            onClick={handleLoginButtonClick}
          >
            로그인
          </button>
        )}
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

export const Title = styled.header``;

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
