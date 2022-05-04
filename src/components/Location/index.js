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

  @media ${media.secondary} {
    grid-template-columns: repeat(1, 1fr);
  }
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

  @media ${media.secondary} {
    clip-path: none;
    padding: 1.65em;
  }

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

  .map-link {
    a {
      color: ${color.callout};
      font-family: ${fonts.fontLight};
    }
  }
`;

const LocationImage = styled.div`
  grid-area: 1/2/2/6;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;

  @media ${media.secondary} {
    height: 100%;
    width: 10em;
  }
`;

const GetDirections = styled.a`
  color: ${color.background};
  clip-path: polygon(100% 0%,100% 0%,68% 48%,38% 0%);
  background-color: ${color.callout};
  z-index: 2;
  grid-area: 1/2/2/3;
`;


const Location = ({ data }) => (

  <>
    <LocationContainer>
      <LocationContent>
        <div className="title">
          {data.name
            ?  `${data.name}`
            : ''}
        </div>
        <div className="address">
          <div>
            {data.addLine1
              ?  `${data.addLine1}`
              : ''}
          </div>
          <div>
            {data.addLine2
              ?  `${data.addLine2}`
              : ''}
          </div>
        </div>
        {data.addLine2
          ? (
            <div className="map-link">
              <a href={data.mapLink} target="_blank">view on map</a>
            </div>
          )
          : ''}
      </LocationContent>
      <GetDirections></GetDirections>
      <LocationImage imageUrl={data.image} />
    </LocationContainer>
  </>
);

export default Location;
