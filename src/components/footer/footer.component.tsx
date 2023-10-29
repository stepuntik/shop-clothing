import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import {
  StyledFooter,
  ConnectSection,
  StyledHeading,
  SocialLinks,
  FooterLink,
  Copyright,
} from './footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <ConnectSection>
        <StyledHeading>Contact me:</StyledHeading>
        <SocialLinks>
          <FooterLink href="https://www.linkedin.com/in/stepuntik/">
            <FaLinkedin /> LinkedIn
          </FooterLink>
          <FooterLink href="https://github.com/stepuntik">
            <FaGithub /> GitHub
          </FooterLink>
          <FooterLink href="mailto:steven.lavrenchuk@gmail.com">
            <FaEnvelope /> Email
          </FooterLink>
        </SocialLinks>
      </ConnectSection>
      <p>
        This project is inspired by{' '}
        <FooterLink href="https://zerotomastery.io">
          zerotomastery.io
        </FooterLink>
      </p>
      <Copyright>
        &copy; {currentYear} Stepan Lavrenchuk. All rights reserved.
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
