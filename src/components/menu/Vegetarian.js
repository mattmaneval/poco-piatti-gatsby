import React from 'react';
import styled from 'styled-components';

// Data
import vegetarianData from '../../../data/food/vegetarian-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const VegetarianStyle = styled.div`
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

const Vegetarian = () => (
  <>
    <SectionHeading text="Vegetarian" light />
    <VegetarianStyle>

      {Object.keys(vegetarianData).map((key) => (
        <FoodItem data={vegetarianData[key]} />
      ))}
    </VegetarianStyle>
  </>
);

export default Vegetarian;
