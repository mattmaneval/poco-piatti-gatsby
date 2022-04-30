import React from 'react';
import styled from 'styled-components';

// Styles
import theme from '../../../styles/theme';

const { color } = theme;

const GlobalHeaderStyle = styled.div`
  backdrop-filter: blur(0.8em);
  background-color: rgba(20,20,21,.1);
  color: ${color.background};
  padding: 1.5em 0;
  width: 100%;

  .wrap {
    text-align: center;
  }

  span {
    line-height: 1.3;
  }
`;

const GlobalHeader = () => (
  <GlobalHeaderStyle>
      <div className="wrap">
        Now offering delivery from our Sylvania and Perrysburg locations!
        Minimum order: $60. Delivery charge: $2.
      </div>
  </GlobalHeaderStyle>
);

export default GlobalHeader;
