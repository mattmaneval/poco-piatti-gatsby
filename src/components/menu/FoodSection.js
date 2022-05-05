import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const FoodSectionStyles = styled.div`
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

const FoodSection = ({ foodSectionHeading, foodData }) => (
  <>
    <SectionHeading text={foodSectionHeading} light />
    <FoodSectionStyles>
      {Object.keys(foodData).map((key) => (
        <FoodItem data={foodData[key]} />
      ))}
    </FoodSectionStyles>
  </>
);

export default FoodSection;
