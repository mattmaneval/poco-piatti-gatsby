import React from 'react';
import styled from 'styled-components';

// Data
import locationsData from '../../../data/locations/locations-local';

// Components
import SectionHeading from '../SectionHeading/index';
import Location from '../Location/index';

// Styles
import media from '../../styles/media';
import mixins from '../../styles/mixins';

const LocationsContainer = styled.section`
  ${mixins.wrap}
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media ${media.primary} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Locations = () => (
  <LocationsContainer>
    <SectionHeading text="Locations" light />
    <LocationsGrid>
      {Object.keys(locationsData).map((key) => (
        <Location data={locationsData[key]} />
      ))}
    </LocationsGrid>
  </LocationsContainer>
);

export default Locations;
