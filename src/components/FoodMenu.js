import React from 'react';
import "../sass/_Menu.scss"

import Seafood from "../components/Seafood"
import Vegetarian from "../components/Vegetarian"
import BigPlates from "../components/BigPlates"
import Accompaniments from "../components/Accompaniments"
import Carne from "../components/Carne"
import Salads from "../components/Salads"
import Pizza from "../components/Pizza"

const FoodMenu = () => (
    <div className="Menu">
    <div className="MenuWrap">
      <div className="column-1">
        <Seafood />
        <BigPlates /> 
        <Accompaniments />
      </div>
      <div className="column-2">
        <Carne />
        <Salads />
      </div>
      <div className="column-3">
        <Vegetarian />
        <Pizza />
      </div>
      <div className="mobile-menu">
        <Seafood />
        <Vegetarian />
        <Carne />
        <BigPlates />
        <Pizza />
        <Salads />
        <Accompaniments />
      </div>
    </div>
  </div>
);

export default FoodMenu;
