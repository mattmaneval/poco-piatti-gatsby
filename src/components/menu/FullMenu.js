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
);

export default FullMenu;
