import React from 'react'

// Data
import pizzaData from '../../../data/food/pizza-local'

// Components
import FoodSection from './FoodSection'

const Pizza = () => (
  <FoodSection foodSectionHeading="Pizza" foodData={pizzaData} />
)

export default Pizza
