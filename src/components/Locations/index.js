import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';
import Location from '../Location/index';

// Images
// import PerrysburgStorefront from "../../images/IMG_0198.jpg";
// import DowntownStorefront from "../../images/IMG_0093.jpg";

// Styles
import theme from '../../styles/theme';
import media from '../../styles/media';
import mixins from '../../styles/mixins';

const { color, space } = theme;

const locationsData = [
  {
    name: 'Perrysburg',
    addLine1: '3155 Chappel Dr.',
    addLine2: 'Perrysburg, Ohio',
    mapLink: 'https://www.google.com/maps/place/Poco+Piatti/@41.5266222,-83.6418943,17z/data=!3m1!4b1!4m5!3m4!1s0x883c768b53d781e3:0x5d6db82562378465!8m2!3d41.5266222!4d-83.6397056',
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/perrysburg-storefront.jpg'
  },
  {
    name: 'Sylvania',
    addLine1: '6710 W. Central Ave #1',
    addLine2: 'Toledo, Ohio',
    mapLink: 'https://www.google.com/maps/place/Poco+Piatti/@41.6761659,-83.705647,17z/data=!3m1!4b1!4m5!3m4!1s0x883c7c71850970b1:0x7cc2a19d8128c9ee!8m2!3d41.6760799!4d-83.7034321',
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/perrysburg-storefront.jpg'
  },
  {
    name: 'Downtown',
    addLine1: '329 N Huron',
    addLine2: 'Toledo, Ohio',
    mapLink: 'https://www.google.com/maps/place/Poco+Piatti/@41.6532212,-83.5387535,17z/data=!3m1!4b1!4m5!3m4!1s0x883b877974002a73:0x42c4c8f36a19c00d!8m2!3d41.6532212!4d-83.5365648',
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/downtown-storefront.jpg'
  },
  {
    name: 'The Beruit Street Kitchen',
    addLine1: '',
    addLine2: '',
    mapLink: '',
    image: 'https://pocopiatti.s3.us-east-2.amazonaws.com/Locations/food-truck.png'
  },
];

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
