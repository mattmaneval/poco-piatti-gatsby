import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from "gatsby";

// Components
import Logo from '../Logo/index';
import Facebook from '../Facebook/index';
import Instagram from '../Instagram/index';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts, space } = theme;

const footerLink = {
  hover: css`
    ${mixins.animate};

    &:hover {
      color: ${color.callout};
    }
  `,
};

const FooterStyles = styled.footer`
  ${mixins.section};
  background-color: ${color.foreground};

  .wrap {
    display: flex;

    @media ${media.primary} {
      flex-direction: column;
    }
  }

  h3 {
    color: ${color.background};
  }

  .footer-contact {
    width: 24em;

    svg {
      fill ${color.background};
      width: 12em;
      margin-bottom: 1em;
    }

    a {
      ${footerLink.hover};
      color: ${color.background};
      font-family: ${fonts.font};
      line-height: 140%;
      font-size: 0.95em;
      letter-spacing: 0.05rem;
      display: block;
    }

    @media ${media.primary} {
      margin-bottom: 3.5rem;
    }
  }

  nav {
    display: inline-block;
    position: relative;
    columns: 2 12em;

    @media ${media.primary} {
      columns: 1 auto;
      margin-bottom: ${space.space};
    }

    a {
      ${footerLink.hover};
      display: block;
      font-family: ${fonts.fontBold};
      color: ${color.background};
      padding-bottom: 0.65rem;
      font-size: 0.95em;
      line-height: 160%;
      letter-spacing: 0.12em;
      break-inside: avoid;
      text-transform: uppercase;
    }
  }

  .footer-socials a {
    ${footerLink.hover};
    display: inline-block;
    position: relative;
    padding: 0.3rem;
    transform: translateY(0.3em);
    color: ${color.foregroundDim};

    @media ${media.primary} {
      transform: translateY(0);
      transform: translateX(-0.7em);
    }
  }

  .copyright,
  .copyright a {
    font-family: ${fonts.fontMedium};
    color: ${color.foregroundDim};

    a {
      display: inline-block;
      color: ${color.background};
      padding-bottom: 0;
    }
  }

  .copyright {
    padding: ${space.space} 0;
    ${mixins.wrap};
    font-size: 0.8em;
  }
  `;

const year = new Date().getFullYear();

const Footer = () => (
  <FooterStyles>
    <div className="wrap">
      <div className="footer-contact">
      <Logo />
        <a href="tel:419-931-0281">419-931-0281</a>
        <a href="mailto:pocopiattiparty@gmail.com">pocopiattiparty@gmail.com</a>
      </div>
      <nav>
        <Link to="/Menu/">Menu</Link>
        <Link to="/PrivateEvents/">Private Events</Link>
        <Link to="/Catering/">Catering</Link>
        <Link to="/About/">About</Link>
        <Link to="/Contact/">Contact</Link>
      </nav>
      <div className="footer-socials">
        <Facebook />
        <Instagram />
      </div>

    </div>
    <div className="copyright">
      Copyright &#169;
      {' '}
      {year}
      {' '}
      Poco Piatti All Rights Reserved.
      Site by
      {' '}
      <a href="https://mattmaneval.com/">Matt Maneval</a>
      .
    </div>

  </FooterStyles>
);

export default Footer;
