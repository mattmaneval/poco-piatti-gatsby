import React from 'react';

// Data
import vegetarianData from '../../../data/food/vegetarian-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodSection from './FoodSection';

const Vegetarian = () => (
  <FoodSection
    foodSectionHeading="Vegetarian"
    foodData={vegetarianData}
  />
);

export default Vegetarian;
