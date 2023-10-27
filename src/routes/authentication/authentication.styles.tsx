import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: 1100px) {
    justify-content: space-evenly;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
    width: 100%;
  }

  /* @media (max-width: 470px) {
    background-color: black;
  } */
`;
