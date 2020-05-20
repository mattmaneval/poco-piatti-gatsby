import React from 'react';

const ThePocoExperience = (props) => (
  <section class="home-hero">
  <div class="wrap">
    <h1>The Poco Experience</h1>
    <p>
      Poco Piatti means "small plates." Here, you have the opportunity to
      experience the many flavors of the mediterranean! We strive to create
      dishes that are unique and healthy using only the most fresh and best
      quality ingredients. So share the small, or large, plates with your
      table and enjoy!
    </p>
    <h6>
      <span>carryout & reservations:</span>
      <span><a href="tel:419-931-0281" class="phone" id="cta">419-931-0281</a></span>
    </h6>
    <a href="#popup" class="cta" id="cta">Order Online</a>
    <div class="popup" id="popup">
      <div class="popup-content">
        <a href="#cta close" class="close">&times;</a>
        <h6>Choose your pickup location for online ordering.</h6>
        <div class="popup-content-bottom">
          <a href="https://www.toasttab.com/poco-piatti-perrysburg-3155-chapel-drive/v2/online-order#!/" class="cta leave-popup">Perrysburg</a>
          <a href="https://www.toasttab.com/poco-piatti-toledo-6710-w-central-ave-1/v2/online-order#!/" class="cta leave-popup">Sylvania</a>
        </div>
        <h6>Or call <a href="tel:419-931-0281" class="phone" id="cta">419-931-0281</a> for any location.</h6>
      </div>
    </div>
  </div>
</section>
);

export default ThePocoExperience;
