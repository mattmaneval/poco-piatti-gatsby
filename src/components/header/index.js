import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

// Components
import GlobalHeader from '../GlobalHeader/index';
import Logo from '../Logo/index';
import MenuButton from '../navigation/MenuButton';
import MobileMenu from '../navigation/MobileMenu';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { color, fonts, space } = theme;

const HeaderStyles = styled.header`
  padding: 0 0 2em;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  width: 100%;
  z-index: 10;

  &:before {
    background-image: linear-gradient(#02020a,rgba(2,2,10,0));
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
  }



  .header-wrap {

    ${mixins.flexBetween}

    padding: 2em;





    .header-cta-container {
      display: inline-block;
    }

    .header-cta {
      ${mixins.animate}
      color: ${color.background};
      border: 1.2px solid ${color.callout};
      display: inline-block;
      padding: 0.5em 2.3em;
      position: relative;
      margin-left: 1em;
      text-transform: uppercase;
      line-height: 1.1;
      font-size: 0.95em;
      letter-spacing: 0.085em;
      font-family: ${fonts.fontBold};

      @media ${media.primary} {
        display: none;
      }

      &:hover {
        color: ${color.background};
        background-color: ${color.callout};
      }
    }
  }

  .header-logo {
    transform: translateX(-1em);
    width: 12em;


    @media ${media.primary} {
      width: 8em;
    }
  }

  svg {
    fill: ${color.background};
  }

  nav {
    display: inline-block;
    position: relative;

    @media ${media.primary} {
      display: none;
    }
  }

  a {
    ${mixins.animate};
    font-family: ${fonts.fontBold};
    color: ${color.background};
    padding: ${space.halfSpace};
    font-size: 0.95em;
    letter-spacing: 0.085em;
    text-transform: uppercase;

    &:hover {
      color: ${color.callout};
    }
  }
`;

function Header({absolute}) {
  const [menu, active] = useState(false);

  const handleClick = () => (menu ? active(false) : active(true));

  return (
    <HeaderStyles absolute={absolute} menu={menu}>
      <GlobalHeader />
      <div className="header-wrap">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-links">
        <nav>
          <Link to="/Menu/">Menu</Link>
          <Link to="/PrivateEvents/">Private Events</Link>
          <Link to="/Catering/">Catering</Link>
          <Link to="/About/">About</Link>
        </nav>

        <div className="header-cta-container">
          <div className="header-cta">
          Order Now
          </div>
          <MenuButton menu={menu} onClick={handleClick} />
        </div>
      </div>



      </div>

      <MobileMenu menu={menu} />
    </HeaderStyles>
  );
}

export default Header;
