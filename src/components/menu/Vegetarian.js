import React from 'react'

// Data
import vegetarianData from '../../../data/food/vegetarian-local'

// Components
import FoodSection from './FoodSection'

const Vegetarian = () => (
  <FoodSection foodSectionHeading="Vegetarian" foodData={vegetarianData} />
)

export default Vegetarian
