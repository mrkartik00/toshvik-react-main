import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/images/logo.png';
import logoImageDark from '../assets/images/logo-dark.png';

const Nav = styled.header`
  background: ${({ theme }) => theme.navBackground};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease;

  .nav-container {
    max-width: 1100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .nav-container {
      padding: 0.6rem 1rem;
    }
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  .logo-wrapper {
    height: 60px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    .logo-wrapper {
      height: 50px;
      width: 130px;
    }
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinksContainer = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.navBackground};
    border-top: 1px solid ${({ theme }) => theme.text}22;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 0.5rem;
  }
`;

const NavLinksList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin-left: 1rem;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 0.95rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.linkHover}22;
      color: ${({ theme }) => theme.linkHover};
    }

    &.active {
      background-color: ${({ theme }) => theme.linkHover}33;
      color: ${({ theme }) => theme.linkHover};
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    li {
      margin: 0;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.text}11;
    }

    a {
      padding: 12px 15px;
      width: 100%;
      display: block;
      border-radius: 0;
    }
  }
`;

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Nav>
      <div className="nav-container">
        <LogoLink to="/" onClick={() => setMenuOpen(false)}>
          <div className="logo-wrapper">
            <img src={darkMode ? logoImageDark : logoImage} alt="Toshvik Atta Logo" />
          </div>
        </LogoLink>

        <HamburgerButton onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </HamburgerButton>

        <NavLinksContainer isOpen={menuOpen}>
          <NavLinksList>
            <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink></li>
            <li><NavLink to="/recipes" onClick={() => setMenuOpen(false)}>Recipes</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
          </NavLinksList>
        </NavLinksContainer>
      </div>
    </Nav>
  );
};

export default Header;
