import React from 'react';

// Data
import saladsData from '../../../data/food/salads-local';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodSection from './FoodSection';

const Salads = () => (
  <FoodSection
    foodSectionHeading="Salads"
    foodData={saladsData}
  />
);

export default Salads;
