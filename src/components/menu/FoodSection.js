import React from 'react'
import styled from 'styled-components'

// Components
import FoodItem from './FoodItem'

// Styles
import theme from '../../styles/theme'
import media from '../../styles/media'

const { space, color } = theme

const FoodSectionStyles = styled.div`
  background-color: ${color.background};
  padding: 6em;

  margin-bottom: ${space.space};

  @media ${media.primary} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${media.secondary} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const FoodSection = ({ foodSectionHeading, foodData }) => (
  <FoodSectionStyles>
    {Object.keys(foodData).map((key) => (
      <FoodItem data={foodData[key]} />
    ))}
  </FoodSectionStyles>
)

export default FoodSection

// <SectionHeading text={foodSectionHeading} light />
