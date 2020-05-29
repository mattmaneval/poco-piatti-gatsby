import React from 'react';

const Map = () => (
  <div className="map wrap">
    <div className="bg-container">
      <iframe
        title="Poco Piatti"
        width="600"
        height="450"
        src="https://www.google.com/maps/embed/v1/search?q=Poco%20Piatti&key=AIzaSyBNJCEAj0tFOx14yJN20KE79gXO2_P2TDI"
        allowFullScreen>
      </iframe>
    </div>
  </div>
);

export default Map;
