import React from 'react';
import Seafood from "./Seafood"
import Vegetarian from "./Vegetarian"
import BigPlates from "./BigPlates"
import Accompaniments from "./Accompaniments"
import Carne from "./Carne"
import Salads from "./Salads"
import Pizza from "./Pizza"

const FullMenu = () => (
    <div className="full-menu">
      <div className="wrap">
        <Seafood />
        <Vegetarian />
        <Carne />
        <BigPlates />
        <Pizza />
        <Salads />
        <Accompaniments />
      </div>
    </div>
);

export default FullMenu;
