import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 470px) {
    width: 90%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 470px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    gap: 20px;
  }
`;
