import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 2rem 0;
  margin-top: auto;
  transition: background 0.3s ease, color 0.3s ease;

  p {
    margin: 0.4rem 0;
    font-size: 0.9rem;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    margin: 0 0.4rem;
    font-size: 1.1rem;

    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }

  .icon-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.6rem;

    a {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;

    p {
      font-size: 0.8rem;
    }

    .icon-links a {
      font-size: 1.1rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <p>© {new Date().getFullYear()} Toshvik Atta. All Rights Reserved.</p>
        <p>Nourishing traditions, one grain at a time.</p>
        <div className="icon-links">
          <a
            href="https://www.facebook.com/share/19QtJPP98s/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/toshviks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Toshvik_aata?t=hcSzSmqKu8DRxHHcexiVzA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.youtube.com/@Toshvik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
