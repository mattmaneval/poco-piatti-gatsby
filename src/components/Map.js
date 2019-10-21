import React from 'react';
import '../sass/_Map.scss';

const Map = () => (
  <div className="Map">
    <div className="MapWrap">
      <h1>Find Us</h1>
    <iframe
      title="Poco Piatti"
      width="600"
      height="450"
      src="https://www.google.com/maps/embed/v1/search?q=Poco%20Piatti&key=AIzaSyCpOR8sDMauuZNcyieBgOLB2tAQIA3tk1c"
      allowfullscreen>
      </iframe>
    </div>
  </div>
);

export default Map;
