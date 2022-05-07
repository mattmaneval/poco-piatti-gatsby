import React from 'react'
import styled from 'styled-components'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MapOptions = {
  disableDefaultUI: true,
}

const MapStyle = styled.div`
  height: 100%;
  width: 100%;

  iframe {
    height: 100%;
    width: 100%;
    -webkit-filter: grayscale(100%);
  }
`

const Map = () => (
  <MapStyle>
    <iframe
      id="map"
      title="Poco Piatti"
      width="600"
      height="450"
      src="https://www.google.com/maps/embed/v1/search?q=Poco%20Piatti&key=AIzaSyBNJCEAj0tFOx14yJN20KE79gXO2_P2TDI"
      center
      MapOptions={MapOptions}
    />
  </MapStyle>
)

export default Map
