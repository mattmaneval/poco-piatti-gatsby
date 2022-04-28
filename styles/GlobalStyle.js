import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import mixins from './mixins';
import media from './media';
import theme from './theme';

const { space, color, fonts } = theme;

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
    background-color: ${color.background};
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
    font-size: 7em;
    color: ${color.callout};
    margin-bottom: ${space.space};
    line-height: 85%;

    @media ${media.primary} {
      font-size: 4em;
    }

    @media ${media.secondary} {
      font-size: 4em;
    }
  }

  h2 {
    display: inline-block;
    color: ${color.foreground};
    font-family: ${fonts.title};
    font-size: 3.65em;
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2.25em;
    }
  }

  h3 {
    color: ${color.foreground};
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
    font-size: 5.25em;
    font-family: ${fonts.title};
  }

  h5 {
    ${mixins.animate};
    font-family: ${fonts.heading};
    color: ${color.foregroundDim};
    padding: ${space.halfSpace};
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    @media ${media.secondary} {
      // font-size: 2.25em;
    }
  }

  p {
    font-family: ${fonts.font};
    color: ${color.callout};
    line-height: 140%;
    font-size: 1.25em;

    a {
      ${mixins.animate};
      color: ${color.backgroundTert};
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${color.backgroundTert};
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

  .photo-caption {
    margin: 0.5em;
    color: ${color.background};
    text-transform: uppercase;
  }
`;

export default GlobalStyle;
