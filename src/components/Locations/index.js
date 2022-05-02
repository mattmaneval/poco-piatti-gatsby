import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';
import Location from '../Location/index';

// Images
// import PerrysburgStorefront from "../../images/IMG_0198.jpg";
// import DowntownStorefront from "../../images/IMG_0093.jpg";

// Styles
import theme from '../../../styles/theme';
import media from '../../../styles/media';
import mixins from '../../../styles/mixins';

const { color, space } = theme;

const locationsData = [
  {
    name: 'Perrysburg',
    addLine1: '3155 Chappel Dr.',
    addLine2: 'Perrysburg, Ohio',
    mapLink: '',
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/perrysburg-storefront.jpg'
  },
  {
    name: 'Sylvania',
    addLine1: '6710 W. Central Ave #1',
    addLine2: 'Toledo, Ohio',
    mapLink: '',
    image: ''
  },
  {
    name: 'Downtown',
    addLine1: '329 N Huron',
    addLine2: 'Toledo, Ohio',
    mapLink: '',
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/downtown-storefront.jpg'
  },
  {
    name: 'Food Truck',
    addLine1: '',
    addLine2: '',
    mapLink: '',
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/food-truck.png'
  },
];

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
      {Object.keys(locationsData).map((key) => (
        <Location data={locationsData[key]} />
      ))}
    </LocationsContainer>
  </>
);

export default Locations;
