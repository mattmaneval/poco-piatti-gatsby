import { css } from 'styled-components';

// Fonts
import yantramanavboldWoff from '../fonts/yantramanav-bold-webfont.woff';
import yantramanavboldWoff2 from '../fonts/yantramanav-bold-webfont.woff2';
import yantramanavblackWoff from '../fonts/yantramanav-black-webfont.woff';
import yantramanavblackWoff2 from '../fonts/yantramanav-black-webfont.woff2';
import oldStandardTtRegularWoff from '../fonts/oldstandardtt-regular-webfont.woff'
import oldStandardTtRegularWoff2 from '../fonts/oldstandardtt-regular-webfont.woff2'
import oldStandardTtItalicWoff from '../fonts/oldstandardtt-italic-webfont.woff'
import oldStandardTtItalicWoff2 from '../fonts/oldstandardtt-italic-webfont.woff2'

const Fonts = css`

  @font-face {
      font-family: 'old_standard_ttitalic';
      src: url('${oldStandardTtItalicWoff2}') format('woff2'),
           url('${oldStandardTtItalicWoff}') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'old_standard_ttregular';
      src: url('${oldStandardTtRegularWoff2}') format('woff2'),
           url('${oldStandardTtRegularWoff}') format('woff');
      font-weight: normal;
      font-style: normal;
    }

  @font-face {
    font-family: 'yantramanavblack';
    src: url(${yantramanavblackWoff2}) format('woff2'),
         url(${yantramanavblackWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'yantramanavbold';
    src: url('${yantramanavboldWoff2}') format('woff2'),
         url('${yantramanavboldWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'yantramanavlight';
    src: url('/fonts/yantramanav-light-webfont.woff2') format('woff2'),
         url('/fonts/yantramanav-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'yantramanavmedium';
    src: url('/fonts/yantramanav-medium-webfont.woff2') format('woff2'),
         url('/fonts/yantramanav-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'yantramanavregular';
    src: url('/fonts/yantramanav-regular-webfont.woff2') format('woff2'),
         url('/fonts/yantramanav-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'yantramanavthin';
    src: url('/fonts/yantramanav-thin-webfont.woff2') format('woff2'),
         url('/fonts/yantramanav-thin-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }


`;

export default Fonts;
