import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';
import Location from '../Location/index';

// Images
import diningRoom from "../../images/IMG_0066.jpg";

// Styles
import theme from '../../../styles/theme';
import media from '../../../styles/media';
import mixins from '../../../styles/mixins';

const { color, space } = theme;

const LocationsContainer = styled.div`
  ${mixins.wrap}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media ${media.primary} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Locations = () => (
  <>
    <SectionHeading text="Locations" wrap light />
    <LocationsContainer>
      <Location />
      <Location />
      <Location />
      <Location />
    </LocationsContainer>

  </>
);

export default Locations;
