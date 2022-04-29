import React from 'react';
import styled from 'styled-components';

// Styles
import theme from '../../../styles/theme';

const { color } = theme;

const GlobalHeaderStyle = styled.div`
  background-color: ${color.callout};
  color: ${color.background};
  padding: 0.5em 0;
  text-align: center;
  width: 100%;

  span {
    line-height: 1.3;
  }
`;

const GlobalHeader = () => (
  <GlobalHeaderStyle>
    <div className="wrap">
      <span>
        Now offering delivery from our Sylvania and Perrysburg locations!
        Minimum order: $60. Delivery charge: $2.
      </span>
    </div>
  </GlobalHeaderStyle>
);

export default GlobalHeader;
