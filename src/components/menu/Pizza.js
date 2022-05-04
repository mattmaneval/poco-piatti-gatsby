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

const PizzaStyles = styled.div`
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

const pizzaData = [
  {
    name: 'Caprese',
    desc: 'Fresh Mozzarella. Tomato. Fresh Basil. Olive Oil.',
    price: 12,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your sever for gluten free crust.',
    },
  },
  {
    name: 'Chorizo and Pepperoncini ',
    desc: 'Roasted tomato sauce, chorizo sausage, hot peppers, onions and three cheese blend.',
    price: 12,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your sever for gluten free crust.',
    },
  },
  {
    name: 'Mediterranean Shrimp',
    desc: 'Feta cream, sauteed shrimp, tomato, feta.',
    price: 12,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your sever for gluten free crust.',
    },
  },
  {
    name: 'The Poco Piatti ',
    desc: 'Garlic sauce, tomato, roasted peppers, onion, kalamata olives, feta.',
    price: 12,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your sever for gluten free crust.',
    },
  },
  {
    name: 'Italian Sausage and Ricotta',
    desc: 'Spicy Italian Sausage with ricotta, roasted red peppers, topped with fresh basil..',
    price: 12,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your sever for gluten free crust.',
    },
  },
  {
    name: 'Spinach Artichoke',
    desc: 'Homemade alfredo sauce, artichoke, spinach, tomato, three cheese blend.',
    price: 12,
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free Option',
      subtitle: 'Ask your sever for gluten free crust.',
    },
  },
  {
    name: 'Portabella and Artichoke',
    desc: 'Goat cheese pesto, portabella mushroom, artichoke, caramelized onion, three cheese blend.',
    price: 12,
  },
];

const Pizza = () => (
  <>
    <SectionHeading text="Pizza" light />
    <PizzaStyles>
      {Object.keys(pizzaData).map((key) => (
        <FoodItem data={pizzaData[key]} />
      ))}
    </PizzaStyles>
  </>
);

export default Pizza;
