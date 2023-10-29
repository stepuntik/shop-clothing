import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  padding: 0 20px;
  margin-bottom: 60px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 20px 0;
  text-align: center;
`;

export const BackPageButton = styled(Button)`
  margin: 0 auto;
`;
