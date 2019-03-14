import React from 'react';
import Perrysburg from './Perrysburg';
import Sylvania from './Sylvania';
import Downtown from './Downtown';

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
