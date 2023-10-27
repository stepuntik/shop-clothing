import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 900px) {
    width: 65%;
  }

  @media (max-width: 650px) {
    width: 75%;
  }

  @media (max-width: 470px) {
    width: 95%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:nth-last-child(2) {
    width: 15%;
    text-align: center;
  }

  &:last-child {
    width: 16%;
    text-align: end;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
