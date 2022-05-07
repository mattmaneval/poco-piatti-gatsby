import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Styles
import theme from '../../styles/theme'

const { color, fonts, space } = theme

const MobileMenuStyles = styled.div`
  width: 100%;
  background-color: rgba(2, 2, 10, 0.95);
  height: 100vh;
  transform: ${({ menu }) => (menu ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${({ menu }) => (menu ? '1' : '0')};
  transition: all 0.9s;
  padding: 6em 2em 0 2em;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow-x: hidden;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .mobile-nav {
    display: inline-block;
    margin-bottom: ${space.halfSpace};

    a {
      color: ${color.background};
      display: block;
      padding: ${space.halfSpace} 0;
      font-size: 1em;
      letter-spacing: 0.12em;
      text-align: right;
    }
  }

  .mobile-menu-contact {
    margin-bottom: ${space.space};

    h3 {
      margin-bottom: ${space.space};
    }

    a {
      color: ${color.foregroundDim};
      font-family: ${fonts.font};
      line-height: 140%;
      font-size: 1.25em;
      letter-spacing: 0.05rem;
      display: block;
      padding: 0 0 ${space.quarterSpace} 0;
    }
  }

  .mobile-menu-socials {
    display: inline-block;
    position: relative;
    transform: translateX(-1.3em);

    svg {
      fill: none;
      color: ${color.foregroundDim};
    }
  }
`

const MobileMenu = ({ menu }) => (
  <MobileMenuStyles menu={menu}>
    <nav className="mobile-nav">
      <Link href="/">Home</Link>
      <Link to="/Menu/">Menu</Link>
      <Link to="/Catering/">Catering</Link>
      <Link to="/PrivateEvents/">Private Events</Link>
      <Link to="/About/">About</Link>
    </nav>
  </MobileMenuStyles>
)

MobileMenu.propTypes = {
  menu: PropTypes.bool.isRequired,
}

export default MobileMenu
