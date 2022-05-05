import React from 'react';
import styled from 'styled-components';

// Data
import pizzaData from '../../../data/food/pizza-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const PizzaStyles = styled.div`
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

const Pizza = () => (
  <>
    <SectionHeading text="Pizza" light />
    <PizzaStyles>
      {Object.keys(pizzaData).map((key) => (
        <FoodItem data={pizzaData[key]} />
      ))}
    </PizzaStyles>
  </>
);

export default Pizza;
