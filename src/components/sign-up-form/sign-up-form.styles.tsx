import styled from 'styled-components';

export const SignUpContainer = styled.div`
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

export const SignUpButtonContainer = styled.div`
  @media (max-width: 470px) {
    width: 80%;
    margin: 0 auto;

    & button {
      width: 100%;
    }
  }
`;
