import React from 'react';
import "./_Perrysburg.scss";

const Perrysburg = () => (
  <div className="Perrysburg">
    <div className="Location">
      <h1>Perrysburg</h1>
      <span className="Underline"></span>
      <p>3155 Chappel Dr.<br />Perrysburg, Ohio</p>
      <h3>419-931-0281</h3>
    </div>
    <div className="Hours">
      <section className="Weekdays">
        <p>Mon, 11:30 am - 9 pm</p>
        <p>Tue - Thu, 11:30 - 9:30 pm</p>
        <p>Fri - Sat, 11:30 - 10:30 pm</p>
        <p>Sun, 12 am - 9 pm</p>
      </section>
    </div>
  </div>
);

export default Perrysburg;
