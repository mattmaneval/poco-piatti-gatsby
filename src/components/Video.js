import React from 'react';
import './_Video.scss';

const Video = () => (
  <div className="Video">
    <div className="VideoWrap">
      <section>
        <h6>POCO PERRYSBURG X POCO SYLVANIA X POCO DOWNTOWN</h6>
        <h1>Downtown Toledo</h1>
        <span className="Underline"></span>
        <p>Nearly 18 months in the making, we couldn’t be more excited to announce our 
        fourth Balance Pan-Asian Grille located in Downtown Toledo at 215 N Summit St
        (at the corner of Summit and Jefferson) in the historic Summit Street Parking Garage.
        And we have a big surprise for this location: Balance Farms. An 8000+ square
        foot urban farm adjacent to the restaurant, where we will grow produce for all
        of our Toledo-area locations (Sylvania, Maumee, and Perrysburg). It’s glassed-in
        just like our kitchens for a transparent view into where your food comes from.
        We will be growing vegetables and seafood side by side, in perfect balance,
        using an inherently Organic system called Aquaponics. Harvesting our crops
        each morning before we open our restaurants for the day, offering local
        farm-to-fork meals year-round.
        </p>
      </section>
      <aside>
        <iframe title="Poco Piatti" src="https://player.vimeo.com/video/325445778"
        width="640" height="360" frameborder="0"
        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </aside>
    </div>
  </div>
);

export default Video;
