import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // pour icônes

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.couleurs.rouge};
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 1100;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.couleurs.blanc};
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.couleurs.rouge};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.couleurs.blanc};
  z-index: 1100;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  background: #111;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
  transition: right 0.3s ease;
  z-index: 1000;

  a {
    color: white;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.couleurs.rouge};
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>RDC</Logo>

      <Nav>
        <Link to="/">Accueil</Link>
        <Link to="/histoire">Histoire</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/destinations">Visites</Link>
        <Link to="/richesses">Richesses</Link>
      </Nav>

      <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuIcon>

      <MobileNav open={menuOpen}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
        <Link to="/histoire" onClick={() => setMenuOpen(false)}>Histoire</Link>
        <Link to="/culture" onClick={() => setMenuOpen(false)}>Culture</Link>
        <Link to="/destinations" onClick={() => setMenuOpen(false)}>Visites</Link>
        <Link to="/richesses" onClick={() => setMenuOpen(false)}>Richesses</Link>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
