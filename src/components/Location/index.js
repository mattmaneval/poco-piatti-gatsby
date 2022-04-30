import React from 'react';
import styled from 'styled-components';

// Components
import GoogleMap from '../GoogleMap/index';
import Cta from '../Cta/index';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { color, space, fonts } = theme;

const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
`;
const LocationContent = styled.div`
  background-color: ${color.background};
  font-family: ${fonts.fontMedium};
  grid-area: 1/1/2/3;
  clip-path: polygon(69% 0,100% 100%,0% 100%,0 0%);
  min-height: 18.5em;
  position: relative;
  padding: 2.5em;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .title {
    color: ${color.foreground};
    margin-bottom: 1em;
  }

  .address {
    color: ${color.foregroundDim};
    font-family: ${fonts.font};
    margin-bottom: 1em;
  }

  .hours {
    margin-bottom: 1em;
  }
`;

const LocationMap = styled.div`
  grid-area: 1/2/2/6;

`;

const GetDirections = styled.a`
  color: ${color.background};
  clip-path: polygon(100% 0%,100% 0%,82% 70%,38% 0%);
  background-color: ${color.callout};
  z-index: 2;
  grid-area: 1/2/2/3;
`;


const Map = () => (
  <>
    <LocationContainer>
      <LocationContent>
        <div className="title">Perrysburg</div>
        <div className="address">
          <div>3155 Chappel Dr.</div>
          <div>Perrysburg, Ohio</div>
        </div>
      </LocationContent>
      <GetDirections>G</GetDirections>
      <LocationMap>
        <GoogleMap />
      </LocationMap>
    </LocationContainer>
  </>
);

export default Map;
