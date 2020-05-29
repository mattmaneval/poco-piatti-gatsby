import React from 'react';

const HomeHero = (props) => (
  <section className="home-hero">
  <div className="wrap">
  <h1>The Poco Experience<br />Dine in or<br />TO-GO</h1>
  <br />
    <h6>
      <span>carryout & reservations</span>
      <span><a href="tel:419-931-0281" className="phone" id="cta">419-931-0281</a></span>
    </h6>
    <a href="#popup" className="cta" id="cta">Order Online</a>
  </div>
</section>
);

export default HomeHero;
