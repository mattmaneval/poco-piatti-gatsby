import React from 'react';

const ThePocoExperience = (props) => (
  <section class="home-hero">
  <div class="wrap">
  <a href="#popup" class="cta" id="cta">Order Online</a>
  <h6>
    <span>carryout & reservations:</span>
    <span><a href="#" class="phone" id="cta">419-931-0281</a></span>
  </h6>
  <div class="popup" id="popup">
    <div class="popup-content">
      <a href="#cta close" class="close">&times;</a>
      <h6>Choose your location for online ordering.</h6>
      <div class="popup-content-bottom">
        <a href="#cta" class="cta leave-popup">Perrysburg</a>
        <a href="#cta" class="cta leave-popup">Sylvania</a>
      </div>
      <h6>Or call <a href="#" class="phone" id="cta">419-931-0281</a> for any location.</h6>
    </div>
  </div>
    <h1>The Poco Experience</h1>
    <p>
      Poco Piatti means "small plates." Here, you have the opportunity to
      experience the many flavors of the mediterranean! We strive to create
      dishes that are unique and healthy using only the most fresh and best
      quality ingredients. So share the small, or large, plates with your
      table and enjoy!
    </p>
  </div>
</section>
);

export default ThePocoExperience;
