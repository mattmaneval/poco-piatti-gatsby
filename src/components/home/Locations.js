import React from 'react';
import bar from '../../images/bar.jpg';

const Locations = () => (
  <section class="locations">
  <div class="location">
    <h6>Perrysburg</h6>
    <div class="address">
      <p>3155 Chappel Dr.</p>
      <p>Perrysburg, Ohio</p>
    </div>
    <div class="hours">
      <p>Mon, 11:30 am - 9 pm</p>
      <p>Tue - Thu, 11:30 - 9:30 pm</p>
      <p>Fri - Sat, 11:30 - 10:30 pm</p>
      <p>Sun, 12 am - 9 pm</p>
    </div>
  </div>
  <div class="location">
    <h6>Sylvania</h6>
    <div class="address">
      <p>6710 W. Central Ave #1</p>
      <p>Toledo, Ohio</p>
    </div>
  </div>
  <div class="hours">
    <p>Mon - Fri, 11:30 am - Close</p>
    <p>Sat, 11:30 - Close</p>
    <p>Sun, 12 am - 9 pm</p>
  </div>
  <div class="location">
    <h6>Downtown</h6>
    <div class="address">
      <p>329 N Huron</p>
      <p>Toledo, Ohio</p>
    </div>
  </div>
  <div class="hours">
    <p>Open for private events.</p>
  </div>

  </section>
);

export default Locations;
