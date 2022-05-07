import React from 'react'

// Data
import sidesData from '../../../data/food/sides-local'

// Components
import FoodSection from './FoodSection'

const Sides = () => (
  <FoodSection foodSectionHeading="Sides" foodData={sidesData} />
)

export default Sides
