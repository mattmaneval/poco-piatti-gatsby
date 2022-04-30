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

const CarneStyles = styled.div`
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

const carneData = [
  {
    name: 'Poco Tips',
    desc: 'Beef or chicken sauteed with lemon and garlic. Served with hummous.',
    price: {
      small: 9,
      large: 17,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Grilled Baby Lamb Chops',
    desc: 'Marinated in balsamic, fresh herbs and garlic, grilled to perfection.',
    price: 15,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Ara-yes Halabi',
    desc: 'Lamb, parsley and onion baked in pita. Served with hummous.',
    price: {
      small: 7,
      large: 12,
    },
  },
  {
    name: 'Kibbe Nayee Beef (raw)',
    desc: 'Mixed with cracked wheat and spices. Served with onion, cucumbers and radish.',
    price: 10,
  },
  {
    name: 'Kibbe Nayee Lamb (raw)',
    desc: 'Mixed with cracked wheat and spices. Served with onion, cucumbers and radish.',
    price: 13,
  },
  {
    name: 'Stuffed Cabbage Rolls',
    desc: 'Cabbage stuffed with lamb and rice. Cooked with tomato, garlic and mint.',
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
    name: 'Eggplant Rolotini',
    desc: 'Baked eggplant stuffed with ricotta and salami. Topped with marinara and our three cheese blend.',
    price: 8,
  },
  {
    name: 'Markouk Chicken Wraps',
    desc: 'Roasted chicken baked in markouk bread with garlic sauce and pickles.',
    price: {
      small: 7,
      large: 12,
    },
  },
  {
    name: 'Meat Grape Leaves',
    desc: 'Stuffed with ground beef, lamb and rice. Cooked with lemon juice and mint.',
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
    name: 'Chicken Parmesan Sliders',
    desc: 'Spicy chicken meatballs made with homemade seasoned bread crumbs and served atop our brioche buns.',
    price: {
      small: 9,
      large: 15,
    },
  },
  {
    name: 'Lamb Sliders',
    desc: 'Grilled lamb sliders with a caramelized onion cream cheese and fresh arugula on brioche.',
    price: {
      small: 10,
      large: 17,
    },
  },
  {
    name: 'Chorizo and Beans',
    desc: 'Chorizo with white beans in a spicy tomato sauce.',
    price: 8,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
];

const Carne = () => (
  <>
    <SectionHeading text="Carne" light />
    <CarneStyles>
      {Object.keys(carneData).map((key) => (
        <FoodItem data={carneData[key]} />
      ))}
    </CarneStyles>
  </>
);

export default Carne;
