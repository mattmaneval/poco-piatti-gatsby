import React from 'react';

// Data
import bigPlatesData from '../../../data/food/big-plates-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodSection from './FoodSection';

const BigPlates = () => (
  <FoodSection
    foodSectionHeading="Big Plates"
    foodData={bigPlatesData}
  />
);

export default BigPlates;
