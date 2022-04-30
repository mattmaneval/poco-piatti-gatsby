import React from 'react';
import styled from 'styled-components';

// Components
import SectionHeading from '../SectionHeading/index';
import FoodItem from './FoodItem';

// Styles
import mixins from '../../../styles/mixins';
import theme from '../../../styles/theme';
import media from '../../../styles/media';

const { space } = theme;

const SaladsStyle = styled.div`
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

const saladsData = [
  {
    name: 'Greek Salad',
    desc: 'Lettuce, tomato, cucumber, onion, peppers, olives, feta.',
    price: {
      small: 6,
      large: 11,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Fatoosh',
    desc: 'Tomato, cucumber, peppers, onion, pita chips, sumac, lemon and olive oil.',
    price: {
      small: 7,
      large: 12,
    },
  },
  {
    name: 'Mashgara Tabouli',
    desc: 'Parsley, tomato, cucumber, onion, mint, cracked wheat, lemon and olive oil.',
    price: {
      small: 6,
      large: 10,
    },
  },
  {
    name: 'Falafel Salad',
    desc: 'Falafel patties, tomato, cucumber, radish, pickle, onion, tahini sauce.',
    price: {
      small: 6,
      large: 11,
    },
  },
  {
    name: 'Artichoke Salad',
    desc: 'Artichoke hearts, hearts of palm, radish, grape tomato, spring mix, lemon feta vinaigrette.',
    price: {
      small: 7,
      large: 12,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Poco House Salad',
    desc: 'Spring mix, red onion, candied pecans, grape tomato, raspberry vinaigrette.',
    price: {
      small: 5,
      large: 9,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Roasted Beet Salad',
    desc: 'Spring mix, roasted beets, carrots, red pepper, red onion, goat cheese, candied pecans, balsamic dressing.',
    price: {
      small: 7,
      large: 12,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
];

const Salads = () => (
  <>
    <SectionHeading text="Salads" light />
    <SaladsStyle>
      {Object.keys(saladsData).map((key) => (
        <FoodItem data={saladsData[key]} />
      ))}
    </SaladsStyle>
  </>
);

export default Salads;
