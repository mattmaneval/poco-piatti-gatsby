import React from 'react'

// Data
import saladsData from '../../../data/food/salads-local'

// Components
import FoodSection from './FoodSection'

const Salads = () => (
  <FoodSection foodSectionHeading="Salads" foodData={saladsData} />
)

export default Salads
