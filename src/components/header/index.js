import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

// Components
import GlobalHeader from '../GlobalHeader/index';
import Logo from '../Logo/index';
// import InnerNav from './InnerNav/index';
// import PrimaryCta from '../navigation/PrimaryCta';
import MenuButton from '../navigation/MenuButton';
import MobileMenu from '../navigation/MobileMenu';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

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
    ${mixins.wrap}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2em 0;

    .header-links {
      margin: auto
    }

    .header-logo {
      margin: auto;
    }

    .header-cta-container {

      display: flex;
      align-items: center;
      justify-content: flex-end;

    }

    .header-cta {
      ${mixins.animate}
      color: ${color.background};
      border: 1.5px solid ${color.background};
      display: inline-block;
      padding: 1em 2em;
      border-radius: 2em;

      @media ${media.primary} {
        display: none;
      }

      &:hover {
        color: ${color.foreground};
        background-color: ${color.background}
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
    font-family: ${fonts.heading};
    color: ${color.background};
    padding: ${space.halfSpace};
    font-size: 0.95em;
    text-transform: uppercase;

    &:hover {
      color: ${color.backgroundTert};
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
      <div className="header-links">
        <nav>
          <Link to="/Menu/">Menu</Link>
          <Link to="/Catering/">Catering</Link>
          <Link to="/PrivateEvents/">Private Events</Link>
          <Link to="/About/">About</Link>
        </nav>
      </div>
        <div className="header-logo">
          <Logo />
        </div>
      <div className="header-cta-container">
        <div className="header-cta">
        Order Now
        </div>
        <MenuButton menu={menu} onClick={handleClick} />
      </div>

      </div>

      <MobileMenu menu={menu} />
    </HeaderStyles>
  );
}

export default Header;
