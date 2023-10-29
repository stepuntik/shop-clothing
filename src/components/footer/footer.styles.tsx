import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 50px;
  border-top: 1px solid black;
  padding-bottom: 30px;
  text-align: center;
`;

export const ConnectSection = styled.section`
  margin-bottom: 20px;
`;

export const StyledHeading = styled.h3`
  font-size: 24px;
  font-weight: 100;
  text-transform: uppercase;
  margin: 14px 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
`;

export const FooterLink = styled.a`
  text-decoration: none;

  &:hover {
    font-weight: 900;
  }
`;

export const Copyright = styled.p`
  margin: 0;
`;
