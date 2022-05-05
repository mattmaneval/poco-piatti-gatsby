import React from 'react';

// Data
import seafoodData from '../../../data/food/seafood-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodSection from './FoodSection';

const Seafood = () => (
  <FoodSection
    foodSectionHeading="Seafood"
    foodData={seafoodData}
  />
);

export default Seafood;
