import React from 'react';

// Data
import pizzaData from '../../../data/food/pizza-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodSection from './FoodSection';

const Pizza = () => (
  <FoodSection
    foodSectionHeading="Pizza"
    foodData={pizzaData}
  />
);

export default Pizza;
