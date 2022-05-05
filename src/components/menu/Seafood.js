import React from 'react';
import styled from 'styled-components';

// Data
import seafoodData from '../../../data/food/seafood-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const SeafoodStyle = styled.div`
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


const Seafood = () => (
  <>
    <SectionHeading text="Seafood" light />
    <SeafoodStyle>
      {Object.keys(seafoodData).map((key) => (
        <FoodItem data={seafoodData[key]} />
      ))}
    </SeafoodStyle>
  </>
);

export default Seafood;
