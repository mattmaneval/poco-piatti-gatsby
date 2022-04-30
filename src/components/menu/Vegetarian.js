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

const VegetarianStyle = styled.div`
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

const vegetarianData = [
  {
    name: 'Riad\'s Hummuos B Tahini',
    desc: 'Served with Pita.',
    price: {
      small: 5,
      large: 8,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your server for fresh veggies.',
    },
  },
  {
    name: 'Roasted Garlic Feta Dip',
    desc: 'Served warm with diced tomato.',
    price: {
      small: 6,
      large: 9,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your server for fresh veggies.',
    },
  },
  {
    name: 'Lebanee',
    desc: 'Yogurt with cucumber, mint and drizzled with olive oil.',
    price: {
      small: 5,
      large: 8,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your server for fresh veggies.',
    },
  },
  {
    name: 'Saganaki Kasseri',
    desc: 'Greek kasseri cheese flamed tableside.',
    price: 6,
  },
  {
    name: 'Sauteed Mushrooms ',
    price: 9,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Mujadra',
    desc: 'Green lentils and rice with caramelized onions and pickles.',
    price: {
      small: 6,
      large: 9,
    },
  },
  {
    name: 'Lubia Bi Zeit',
    desc: 'Sauteed green beans with garlic and onions in a tomato sauce.',
    price: 8,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Veggie Grape Leaves',
    desc: 'Stuffed with chick peas, tomatoes, rice, onion and lemon.',
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
    name: 'Poco Brussel Sprouts',
    desc: 'Covered in fig jam, mint yogurt, grapes and toasted pecans.',
    price: {
      small: 6,
      large: 10,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Roasted Cauliflower',
    desc: 'Tossed in garlic oil, tahini and fresh dill.',
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
    name: 'Stuffed Portabella Caps',
    desc: 'Mushroom stuffed with a broccoli pesto and topped with pepperjack cheese and tomato.',
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

const Vegetarian = () => (
  <>
    <SectionHeading text="Vegetarian" light />
    <VegetarianStyle>

      {Object.keys(vegetarianData).map((key) => (
        <FoodItem data={vegetarianData[key]} />
      ))}
    </VegetarianStyle>
  </>
);

export default Vegetarian;
