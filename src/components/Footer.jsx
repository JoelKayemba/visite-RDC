import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.couleurs.noir};
  color: ${({ theme }) => theme.couleurs.blanc};
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.couleurs.rouge};
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.couleurs.bleuRDC};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Visite RDC - Tous droits réservés</FooterText>
      <SocialLink href="https://joelkayemba.com" target="_blank" rel="noopener noreferrer">
        By Joel Kayemba
      </SocialLink>
    </FooterContainer>
  );
};

export default Footer;
