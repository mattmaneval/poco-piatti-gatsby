import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
// import Link from 'next/link';

// Components
// import GlobalHeader from './GlobalHeader/index';
// import Logo from './icons/Logo';
// import InnerNav from './InnerNav/index';
import PrimaryCta from '../navigation/PrimaryCta';
import MenuButton from '../navigation/MenuButton';
import MobileMenu from '../navigation/MobileMenu';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, fonts, space } = theme;

const HeaderStyles = styled.header`
  border-bottom: 1.5px solid ${color.foreground};
  padding: 2em 2.65em;
  width: 100%;
  z-index: 10;

  .wrap {
    ${mixins.flexBetween};
  }

  .header-logo {
    transform: translateX(-1em);
    width: 9em;


    @media ${media.primary} {
      width: 8em;
    }
  }

  svg {
    fill: ${color.foreground};
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
    color: ${color.foreground};
    padding: ${space.halfSpace};
    font-size: 0.95em;
    text-transform: uppercase;

    &:hover {
      color: ${color.backgroundTert};
    }
  }
`;

function Header() {
  const [menu, active] = useState(false);

  const handleClick = () => (menu ? active(false) : active(true));

  return (
    <HeaderStyles menu={menu}>
      <div className="wrap">
      <div className="header-logo">

      </div>
      <div className="header-links">
        <nav>
          <Link to="/Menu/">
            <a>Menu</a>
          </Link>
          <Link to="/Catering/">
            <a>Catering</a>
          </Link>
          <Link to="/PrivateEvents/">
            <a>Private Events</a>
          </Link>
          <Link to="/About/">
            <a>About</a>
          </Link>
        </nav>

        <MenuButton menu={menu} onClick={handleClick} />
      </div>
      <PrimaryCta
        text="Order Now"
        onClick={handleClick}
      />
      <MobileMenu menu={menu} />
      </div>
    </HeaderStyles>
  );
}

export default Header;
