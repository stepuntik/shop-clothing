import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 200px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  /* @media (max-width: 650px) {
    height: 100px;
  } */
`;

export const FormContainer = styled.form`
  width: 100%;
  /* height: 100px; */
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const CardElementContainer = styled.div`
  border: 1px solid darkgrey;
  padding: 10px;
`;
