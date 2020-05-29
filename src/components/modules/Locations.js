import React from 'react';
import IMG_0198 from '../../images/IMG_0198.jpg'
import IMG_0093 from '../../images/IMG_0093.jpg'
import IMG_0096 from '../../images/IMG_0096.jpg'

const Locations = () => (
<section className="locations">
  <div className="wrap">
    <h2>Find us</h2>
    <div className="locations-content">
      <div className="location">
        <figure>
          <img src={IMG_0198} alt="Person on a tour" className="story__img" />
        </figure>
        <h6>Perrysburg</h6>
        <div className="address">
          <p>3155 Chappel Dr.</p>
          <p>Perrysburg, Ohio</p>
        </div>
        <div className="hours">
          <p>Mon, 11:30 am - 9 pm</p>
          <p>Tue - Thu, 11:30 - 9:30 pm</p>
          <p>Fri - Sat, 11:30 - 10:30 pm</p>
          <p>Sun, 12 am - 9 pm</p>
        </div>
      </div>
      <div className="location">
        <figure className="story__shape">
          <img src={IMG_0096} alt="Person on a tour" className="story__img" />
        </figure>
        <h6>Sylvania</h6>
        <div className="address">
          <p>6710 W. Central Ave #1</p>
          <p>Toledo, Ohio</p>
        </div>
        <div className="hours">
          <p>Mon - Fri, 11:30 am - Close</p>
          <p>Sat, 11:30 - Close</p>
          <p>Sun, 12 am - 9 pm</p>
        </div>
      </div>
      <div className="location">
        <figure className="story__shape">
          <img src={IMG_0093} alt="Person on a tour" className="story__img" />
        </figure>
        <h6>Downtown</h6>
        <div className="address">
          <p>329 N Huron</p>
          <p>Toledo, Ohio</p>
        </div>
        <div className="hours">
          <p>Open for private events.</p>
        </div>
      </div>
    </div>
    <a href="https://www.google.com/maps/search/poco+piatti/@41.6013728,-83.6900514,12z/data=!3m1!4b1" className="cta">Google Maps</a>
  </div>
</section>
);

export default Locations;
