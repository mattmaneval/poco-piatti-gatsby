import React from 'react'

// Data
import seafoodData from '../../../data/food/seafood-local'

// Components
import FoodSection from './FoodSection'

const Seafood = () => (
  <FoodSection foodSectionHeading="Seafood" foodData={seafoodData} />
)

export default Seafood
