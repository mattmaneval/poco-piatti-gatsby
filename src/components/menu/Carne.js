import React from 'react'

// Data
import carneData from '../../../data/food/carne-local'

// Components
import FoodSection from './FoodSection'

const Carne = () => (
  <FoodSection foodSectionHeading="Carne" foodData={carneData} />
)

export default Carne
