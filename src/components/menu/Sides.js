import React from 'react';
import styled from 'styled-components';

// Data
import sidesData from '../../../data/food/sides-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const SidesStyle = styled.div`
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

const Sides = () => (
  <>
    <SectionHeading text="Sides" light />
    <SidesStyle>
      {Object.keys(sidesData).map((key) => (
        <FoodItem data={sidesData[key]} />
      ))}
    </SidesStyle>
  </>
);

export default Sides;
