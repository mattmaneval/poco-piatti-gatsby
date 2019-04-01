import React from 'react';
import Perrysburg from './Perrysburg';
import Sylvania from './Sylvania';
import Downtown from './Downtown';
import "../sass/_Locations.scss";

const Locations = () => (
  <div className="Locations">
    <div className="Locations-wrap">
      <Perrysburg />
      <Sylvania />
      <Downtown />
    </div>
  </div>
);

export default Locations;
