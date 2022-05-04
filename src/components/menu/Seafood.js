import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import media from '../../styles/media';

const { space } = theme;

const SeafoodStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: ${space.space};

  @media ${media.primary} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${media.secondary} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const seafoodData = [
  {
    name: 'Shrimp Saganaki',
    desc: 'Sauteed with tomatoes, garlic, white wine, fresh oregano and feta.',
    price: {
      small: 7,
      large: 13,
    },
  },
  {
    name: 'Fried Calamari Zaatar',
    desc: 'Zaatar encrusted and served with spicy marinara.',
    price: {
      small: 7,
      large: 13,
    },
  },
  {
    name: 'Shrimp Asti-Spumante',
    desc: 'Sauteed with garlic, asti-spumante and parsley.',
    price: {
      small: 7,
      large: 13,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Thai Shrimp \'Lasagna\'',
    desc: 'Layered with crispy wontons, spicy thai and coconut basil.',
    price: {
      small: 7,
      large: 13,
    },
  },
  {
    name: 'Blue Crab Lump Crab Cakes',
    desc: 'Served with roasted red pepper cream sauce.',
    price: {
      small: 9,
      large: 17,
    },
  },
  {
    name: 'Sumac Encrusted Tuna',
    desc: 'Served with tahini and diced cucumber salad.',
    price: {
      small: 10,
      large: 18,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
];

const Seafood = () => (
  <>
    <SectionHeading text="Seafood" light />
    <SeafoodStyle>
      {Object.keys(seafoodData).map((key) => (
        <FoodItem data={seafoodData[key]} />
      ))}
    </SeafoodStyle>
  </>
);

export default Seafood;
