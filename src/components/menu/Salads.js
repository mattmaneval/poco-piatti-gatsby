import React from 'react';
import styled from 'styled-components';

// Data
import saladsData from '../../../data/food/salads-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const SaladsStyle = styled.div`
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

const Salads = () => (
  <>
    <SectionHeading text="Salads" light />
    <SaladsStyle>
      {Object.keys(saladsData).map((key) => (
        <FoodItem data={saladsData[key]} />
      ))}
    </SaladsStyle>
  </>
);

export default Salads;
