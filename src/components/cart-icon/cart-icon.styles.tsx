import styled from 'styled-components';

interface CartIconProps {
  popping: boolean;
}

export const CartIconContainer = styled.div<CartIconProps>`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  ${({ popping }) => popping && `transform: scale(1.5);`}

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
