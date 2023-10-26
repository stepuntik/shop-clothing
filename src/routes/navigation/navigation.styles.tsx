import styled from 'styled-components';
import { NavLink as NL, Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 20px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 25%;
  padding: 15px;

  @media screen and (max-width: 800px) {
    padding: 0;
    width: 15%;
  }
`;

export const LogoLink = styled(Link)`
  height: 100%;
`;

export const Greeting = styled.h2`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  align-self: center;

  @media screen and (max-width: 800px) {
    margin-right: auto;
  }
`;

export const NavLinks = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 25%;
  }
`;

export const NavLink = styled(NL)`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
  &.active {
    font-weight: 900;
  }
`;
