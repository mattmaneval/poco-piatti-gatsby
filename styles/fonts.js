import { css } from 'styled-components';

const Fonts = css`
  @font-face {
    font-family: 'old_standard_ttbold';
    src: url('/assets/fonts/oldstandardtt-bold-webfont.woff2') format('woff2'),
         url('/assets/fonts/oldstandardtt-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'old_standard_ttitalic';
    src: url('/assets/fonts/oldstandardtt-italic-webfont.woff2') format('woff2'),
         url('/assets/fonts/oldstandardtt-italic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'old_standard_ttregular';
    src: url('/assets/fonts/oldstandardtt-regular-webfont.woff2') format('woff2'),
         url('/assets/fonts/oldstandardtt-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
  	font-family: 'Telisik';
  	src: url('/assets/fonts/telisik-script.eot');
  	src: url('/assets/fonts/telisik-script.eot?#iefix') format('embedded-opentype'),
               url('/assets/fonts/telisik-script.woff2') format('woff2'),
  	     url('/assets/fonts/telisik-script.woff') format('woff'),
  	     url('/assets/fonts/telisik-script.ttf') format('truetype'),
  	     url('/assets/fonts/telisik-script.svg#youworkforthem') format('svg');
  	font-weight: normal;
  	font-style: normal;
  }

  @font-face {
    font-family: 'eb garamondregular';
    src: url('/assets/fonts/ebgaramond-variablefont-wght-webfont.woff2') format('woff2'),
      url('/assets/fonts/ebgaramond-variablefont-wght-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'ostrich sansheavy';
    src: url('/assets/fonts/ostrichsans-heavy-webfont.woff2') format('woff2'),
      url('/assets/fonts/ostrichsans-heavy-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  };

  @font-face {
    font-family: 'LeagueSpartan-Bold';
    src: url('assets/fonts/LeagueSpartan-Bold.woff2') format('woff2'),
         url('assets/fonts/LeagueSpartan-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default Fonts;
