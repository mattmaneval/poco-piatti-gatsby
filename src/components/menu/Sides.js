import React from 'react';

// Data
import sidesData from '../../../data/food/sides-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodSection from './FoodSection';

const Sides = () => (
  <FoodSection
    foodSectionHeading="Sides"
    foodData={sidesData}
  />
);

export default Sides;
