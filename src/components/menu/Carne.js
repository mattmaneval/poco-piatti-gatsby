import React from 'react';
import styled from 'styled-components';

// Data
import carneData from '../../../data/food/carne-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const CarneStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: ${space.space};

  @media ${media.primary} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${media.secondary} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Carne = () => (
  <>
    <SectionHeading text="Carne" light />
    <CarneStyles>
      {Object.keys(carneData).map((key) => (
        <FoodItem data={carneData[key]} />
      ))}
    </CarneStyles>
  </>
);

export default Carne;
