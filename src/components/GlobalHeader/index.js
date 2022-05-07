import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Styles
import theme from '../../styles/theme'

const { color, fonts } = theme

const GlobalHeaderStyle = styled.div`
  backdrop-filter: blur(0.8em);
  background-color: rgba(20, 20, 21, 0.1);
  color: ${color.background};
  padding: 1.5em 0;
  width: 100%;

  .wrap {
    text-align: center;
    line-height: 1.4;

    a {
      padding: 0;
    }
  }

  .global-header-link {
    color: ${color.callout};
    font-family: ${fonts.fontItalic};
    text-decoration: underline;
    padding: 0;
    text-transform: none;
    font-size: 1em;
    letter-spacing: 0;
    cursor: pointer;
    padding: 0;
  }
`

const GlobalHeader = () => (
  <GlobalHeaderStyle>
    <div className="wrap">
      Now offering{' '}
      <Link to="/Order/">
        <span className="global-header-link">delivery</span>
      </Link>{' '}
      from our Sylvania and Perrysburg locations!
    </div>
  </GlobalHeaderStyle>
)

export default GlobalHeader
