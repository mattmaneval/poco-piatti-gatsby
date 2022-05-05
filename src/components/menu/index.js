import React from 'react';
import styled from 'styled-components';

// Components
import HeadingGroup from "../HeadingGroup/index";
import Seafood from './Seafood';
import Vegetarian from './Vegetarian';
import Carne from './Carne';
import BigPlates from './BigPlates';
import Pizza from './Pizza';
import Salads from './Salads';
import Sides from './Sides';

// Styles
import theme from '../../styles/theme';

const { space, color } = theme;

const FullMenuStyles = styled.section`
  background-color: ${color.foreground};
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
