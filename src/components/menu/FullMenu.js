import React from 'react';
import styled from 'styled-components';
import Seafood from './Seafood';
import Vegetarian from './Vegetarian';
import Carne from './Carne';
import BigPlates from './BigPlates';
import Pizza from './Pizza';
import Salads from './Salads';
import Sides from './Sides';

const FullMenuStyles = styled.section`

  /* .wrap {
    max-width: 48em;
  } */
`;

const FullMenu = () => (
  <FullMenuStyles>
    <div className="wrap">
      <Seafood />
      <Carne />
      <Vegetarian />
      <BigPlates />
      <Pizza />
      <Salads />
      <Sides />
    </div>
  </FullMenuStyles>
);

export default FullMenu;
