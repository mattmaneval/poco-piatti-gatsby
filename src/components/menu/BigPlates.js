import React from 'react';
import styled from 'styled-components';

// Data
import bigPlatesData from '../../../data/food/big-plates-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const BigPlatesStyles = styled.div`
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

const BigPlates = () => (
  <>
    <SectionHeading text="Big Plates" light />
    <BigPlatesStyles>
      {Object.keys(bigPlatesData).map((key) => (
        <FoodItem data={bigPlatesData[key]} />
      ))}
    </BigPlatesStyles>
  </>
);

export default BigPlates;
