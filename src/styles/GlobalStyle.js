import { createGlobalStyle } from 'styled-components'
import Resets from './resets'
import Fonts from './fonts'
import mixins from './mixins'
import media from './media'
import theme from './theme'

const { space, color, fonts } = theme

const GlobalStyle = createGlobalStyle`
  ${Resets};
  ${Fonts};
  ${mixins};
  ${media};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    background-color: ${color.foreground};
    font-family: ${fonts.font};
    overflow-x: hidden;
  }

  body {
    position: relative;
  }

  section {
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    @media ${media.secondary} {
      padding: 3em 0;
    }
  }

  h1 {
    font-family: ${fonts.title};
    font-size: 5.25em;
    color: ${color.background};
    line-height: 1;
    position: relative;
    text-transform: uppercase;
    z-index: 1;

    span {
      color: ${color.background};
      font-family: ${fonts.fontItalic};
      font-size: 0.65em;
      text-transform: capitalize;
    }

    @media ${media.primary} {
      font-size: 4em;
    }

    @media ${media.secondary} {
      font-size: 4em;
    }
  }

  h2 {
    display: inline-block;
    color: ${color.background};
    font-family: ${fonts.font};
    font-size: min(6.8vw,2.2em);
    line-height: 1.2;
    margin-bottom: 1.15em;

    span {
      font-family: ${fonts.fontItalic};
    }

    @media ${media.secondary} {
      // font-size: 2.25em;
    }
  }

  h3 {
    color: ${color.background};
    margin-bottom: ${space.halfSpace};
    font-size: 2.25em;
    font-family: ${fonts.subHeading};
    line-height: 1.3em;

    @media ${media.secondary} {
      font-size: 1.65em;
    }
  }

  h4 {
    color: ${color.foreground};
    margin-bottom: 3rem;
    font-size: 1.65em;
    font-family: ${fonts.title};
  }

  h5 {
    ${mixins.animate};
    font-family: ${fonts.heading};
    color: ${color.foregroundDim};
    // padding: ${space.halfSpace};
    font-size: 1em;
    // letter-spacing: 0.1em;
    text-transform: uppercase;

    @media ${media.secondary} {
      // font-size: 2.25em;
    }
  }

  p {
    font-family: ${fonts.font};
    color: ${color.foregroundDim};
    line-height: 140%;
    font-size: 1.125em;;

    a {
      ${mixins.animate};
      color: ${color.backgroundTert};
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${color.callout};
      }
    }
  }

  .wrap {
    ${mixins.wrap}
  }

  .inner-wrap {
    ${mixins.innerWrap}
  }

  .collapsed {
    display: none;
  }

  .no-padding-top {
    padding-top: 0;
  }

  .no-padding-bottom {
    padding-bottom: 0;
  }

  .title {
    color: ${color.foreground};
    font-family: ${fonts.fontBold};
    font-size: 0.95em;
    letter-spacing: 0.085em;
    margin-bottom: 1em;
    text-transform: uppercase;

    &.light {
      color: ${color.background};
    }
  }

  .map {
    -webkit-filter: grayscale(100%);
  }
`

export default GlobalStyle
